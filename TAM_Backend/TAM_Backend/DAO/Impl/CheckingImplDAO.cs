using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Common;
using TAM_Backend.DataContext;
using TAM_Backend.Model;

namespace TAM_Backend.DAO.Impl
{
    public class CheckingImplDAO : ICheckingDAO
    {
        private readonly AppDbContext _db;

        public CheckingImplDAO(AppDbContext db)
        {
            this._db = db;
        }

        public string CheckIn(decimal stf_Cd, Guid tam_Cd, string cio_Ymd, string cio_Day, string in_Hh_Mm, string ip_In_Log)
        {
            decimal psn_Cd = _db.Accounts.FirstOrDefault(u => u.Stf_Cd.Equals(stf_Cd)).Psn_Cd;

            //Check if ip is valid
            var ipInDb = _db.IPNetworks.Find(ip_In_Log);

            if (ipInDb == null)
            {
                return Constants.ERROR;
            }

            //Check if existing record in db
            CheckInOut cioInDb = _db.CheckInOuts.FirstOrDefault(
                u => u.Cio_Map_Cd.Equals(tam_Cd) 
                && u.Cio_Ymd.Equals(cio_Ymd) 
                && u.Cio_Day.Equals(cio_Day));

            if (cioInDb != null)
            {
                return Constants.ERROR;
            }

            CheckInOut cio = new CheckInOut()
            {
                Cio_Cd = Guid.NewGuid(),
                Cio_Map_Cd = tam_Cd,
                Cio_Ymd = cio_Ymd,
                Cio_Day = cio_Day,
                In_Hh_Mm = in_Hh_Mm,
                Out_Hh_Mm = string.Empty,
                Cio_Duration = 1,
                Cio_State = Constants.STT_000,
                Insert_Ymd = DateTime.Now,
                Insert_Psn_Cd = psn_Cd,
                Ip_In_Log = ip_In_Log
            };

            _db.CheckInOuts.Add(cio);
            _db.SaveChanges();

            return Constants.SUCCESS;
        }

        public string CheckOut(decimal stf_Cd, Guid tam_Cd, string cio_Ymd, string cio_Day, string out_Hh_Mm, string ip_Out_Log)
        {
            decimal psn_Cd = _db.Accounts.FirstOrDefault(u => u.Stf_Cd.Equals(stf_Cd)).Psn_Cd;

            //Check if ip is valid
            var ipInDb = _db.IPNetworks.Find(ip_Out_Log);

            if (ipInDb == null)
            {
                return Constants.ERROR;
            }

            //Check if existing record in db
            CheckInOut cioInDb = _db.CheckInOuts.FirstOrDefault(
                u => u.Cio_Map_Cd.Equals(tam_Cd) 
                && u.Cio_Ymd.Equals(cio_Ymd) 
                && u.Cio_Day.Equals(cio_Day));
            
            if (cioInDb == null)
            {
                return Constants.ERROR;
            }

            int duration = TamUtils.CalculateDuration(cioInDb.In_Hh_Mm, out_Hh_Mm);

            //Set value
            cioInDb.Out_Hh_Mm = out_Hh_Mm;
            cioInDb.Cio_Duration = duration;
            cioInDb.Update_Ymd = DateTime.Now;
            cioInDb.Update_Psn_Cd = psn_Cd;
            cioInDb.Ip_Out_Log = ip_Out_Log;
            cioInDb.Cio_State = TamUtils.ExportState(cioInDb.In_Hh_Mm, duration);

            _db.CheckInOuts.Update(cioInDb);
            _db.SaveChanges();

            //Gennerate Absence
            try
            {
                GenerateAbsence(cioInDb);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return Constants.ERROR;
            }
            

            return Constants.SUCCESS;
        }

        public string UpdateChecking(decimal stf_Cd, Guid tam_Cd, string cio_Ymd, string cio_Day, string in_Hh_Mm, string out_Hh_Mm)
        {
            throw new NotImplementedException();
        }

        public string CheckState(Guid tam_Cd, string cio_Ymd, string cio_Day, String ip_Chk_Log)
        {
            //Check if ip is valid
            var ipInDb = _db.IPNetworks.Find(ip_Chk_Log);

            if (ipInDb == null)
            {
                return Constants.STT_IP;
            }

            //Check if checkin is exist
            var chkInInDb = _db.CheckInOuts.FirstOrDefault(
                u => u.Cio_Map_Cd.Equals(tam_Cd) 
                && u.Cio_Ymd.Equals(cio_Ymd) 
                && u.Cio_Day.Equals(cio_Day));

            if (chkInInDb == null)
            {
                return Constants.STT_IN;
            } else
            {
                if (string.IsNullOrEmpty(chkInInDb.Out_Hh_Mm))
                {
                    return Constants.STT_OUT;
                } else
                {
                    return Constants.STT_DONE;
                }
            }
        }

        public IEnumerable<CheckInOut> GetCheckInOut(Guid tam_Cd, int startDay, int endDay)
        {
            var dateNow = DateTime.Now;
            var dateNowInt = dateNow.Year * 10000;
            dateNowInt += dateNow.Month * 100;
            dateNowInt += dateNow.Day;

            var checkInOutList = _db.CheckInOuts
                .Where(u => u.Cio_Map_Cd.Equals(tam_Cd)
                            /*&& DateTime.Compare(startDay, (u.Insert_Ymd.HasValue ? u.Insert_Ymd.Value : DateTime.Now)) <= 0
                            && DateTime.Compare(endDay, (u.Insert_Ymd.HasValue ? u.Insert_Ymd.Value : DateTime.Now)) >= 0*/
                            && startDay <= Convert.ToInt32(u.Cio_Ymd)
                            && endDay >= Convert.ToInt32(u.Cio_Ymd)
                            && dateNowInt >= Convert.ToInt32(u.Cio_Ymd))
                .OrderByDescending(u => u.Cio_Ymd);

            return checkInOutList;
        }

        public IEnumerable<CheckInOut> GetCheckInOut(Guid tam_Cd, int month)
        {
            var dateNow = DateTime.Now;
            var dateNowInt = dateNow.Year * 10000;
            dateNowInt += dateNow.Month * 100;
            dateNowInt += dateNow.Day;

            var checkInOutList = _db.CheckInOuts
                .Where(u => u.Cio_Map_Cd.Equals(tam_Cd)
                            /*&& ((u.Insert_Ymd.HasValue ? u.Insert_Ymd.Value.Month : DateTime.Now.Month) == month)*/
                            && Convert.ToInt32(u.Cio_Ymd.Substring(4, 2)) == month
                            && dateNowInt >= Convert.ToInt32(u.Cio_Ymd))
                .OrderByDescending(u => u.Cio_Ymd);

            return checkInOutList;
        }

        private void GenerateAbsence(CheckInOut cioInDb)
        {
            int timeAbsence = 480 - cioInDb.Cio_Duration;

            int in_Hh_Mm = TamUtils.ConvertToMinute(cioInDb.In_Hh_Mm);
            int out_Hh_Mm = TamUtils.ConvertToMinute(cioInDb.Out_Hh_Mm);

            List<LeavingRegistration> absenceList = new();

            LeavingRegistration leavingRegistration;

            switch (cioInDb.Cio_State)
            {
                case Constants.STT_000:
                    //If absence time <= 4h
                    if (timeAbsence <= 240)
                    {
                        string from = Constants.HM_13_15;
                        string to = TamUtils.ConvertToHour(TamUtils.ConvertToMinute(Constants.HM_13_15) + timeAbsence);

                        leavingRegistration = Build(from, to, cioInDb);

                        absenceList.Add(leavingRegistration);
                    }
                    else
                    {
                        //1
                        leavingRegistration = new LeavingRegistration()
                        {
                            Cio_Cd = Guid.NewGuid(),
                            Cio_Map_Cd = cioInDb.Cio_Map_Cd,
                            Cio_Ymd = cioInDb.Cio_Ymd,
                            Cio_Day = cioInDb.Cio_Day,
                            Cio_State = 0,
                            Insert_Ymd = DateTime.Now,
                            Insert_Psn_Cd = cioInDb.Insert_Psn_Cd,
                            In_Hh_Mm = Constants.HM_13_15,
                            Out_Hh_Mm = Constants.HM_17_15
                        };

                        absenceList.Add(leavingRegistration);

                        //2
                        leavingRegistration = new LeavingRegistration()
                        {
                            Cio_Cd = Guid.NewGuid(),
                            Cio_Map_Cd = cioInDb.Cio_Map_Cd,
                            Cio_Ymd = cioInDb.Cio_Ymd,
                            Cio_Day = cioInDb.Cio_Day,
                            Cio_State = 0,
                            Insert_Ymd = DateTime.Now,
                            Insert_Psn_Cd = cioInDb.Insert_Psn_Cd,
                            In_Hh_Mm = cioInDb.Out_Hh_Mm,
                            Out_Hh_Mm = TamUtils.ConvertToHour(out_Hh_Mm + timeAbsence - 240)
                        };

                        absenceList.Add(leavingRegistration);
                    }

                    break;
                case Constants.STT_002:
                    if (in_Hh_Mm < TamUtils.ConvertToMinute(Constants.HM_12_00))
                    {
                        //Ra ve truoc 12h
                        if (out_Hh_Mm < TamUtils.ConvertToMinute(Constants.HM_12_00))
                        {
                            //1
                            string from = Constants.HM_08_00;
                            string to = cioInDb.In_Hh_Mm;

                            leavingRegistration = Build(from, to, cioInDb);

                            absenceList.Add(leavingRegistration);

                            //2
                            from = cioInDb.Out_Hh_Mm;
                            to = Constants.HM_17_15;

                            leavingRegistration = Build(from, to, cioInDb);

                            absenceList.Add(leavingRegistration);
                        }
                        else if (out_Hh_Mm < TamUtils.ConvertToMinute(Constants.HM_13_15)) //Ra ve truoc 13h15
                        {
                            if (timeAbsence <= 240)
                            {
                                string from = Constants.HM_13_15;
                                string to = TamUtils.ConvertToHour(TamUtils.ConvertToMinute(Constants.HM_13_15) + timeAbsence);

                                leavingRegistration = Build(from, to, cioInDb);

                                absenceList.Add(leavingRegistration);
                            }
                            else
                            {
                                //1
                                string from = Constants.HM_13_15;
                                string to = Constants.HM_17_15;

                                leavingRegistration = Build(from, to, cioInDb);

                                absenceList.Add(leavingRegistration);

                                //2
                                from = TamUtils.ConvertToHour(in_Hh_Mm - (timeAbsence - 240));
                                to = cioInDb.In_Hh_Mm;

                                leavingRegistration = Build(from, to, cioInDb);

                                absenceList.Add(leavingRegistration);
                            }
                        }
                        else if (out_Hh_Mm < TamUtils.ConvertToMinute(Constants.HM_17_15)) //Ra ve truoc 17h15
                        {
                            //1
                            string from = Constants.HM_08_00;
                            string to = cioInDb.In_Hh_Mm;

                            leavingRegistration = Build(from, to, cioInDb);

                            absenceList.Add(leavingRegistration);

                            //2
                            from = cioInDb.Out_Hh_Mm;
                            to = Constants.HM_17_15;

                            leavingRegistration = Build(from, to, cioInDb);

                            absenceList.Add(leavingRegistration);
                        }
                        else //Ra ve sau 17h15
                        {
                            string from = TamUtils.ConvertToHour(in_Hh_Mm - timeAbsence);
                            string to = cioInDb.In_Hh_Mm;

                            leavingRegistration = Build(from, to, cioInDb);

                            absenceList.Add(leavingRegistration);
                        }
                    } 
                    else if (in_Hh_Mm <= TamUtils.ConvertToMinute(Constants.HM_13_15))
                    {
                        if (timeAbsence <= 240)
                        {
                            string from = Constants.HM_08_00;
                            string to = TamUtils.ConvertToHour(480 + timeAbsence);

                            leavingRegistration = Build(from, to, cioInDb);

                            absenceList.Add(leavingRegistration);
                        }
                        else
                        {
                            string from = Constants.HM_08_00;
                            string to = Constants.HM_12_00;

                            leavingRegistration = Build(from, to, cioInDb);

                            absenceList.Add(leavingRegistration);

                            int timeLeft = timeAbsence - 240;

                            if (out_Hh_Mm <= TamUtils.ConvertToMinute(Constants.HM_13_15))
                            {
                                from = Constants.HM_13_15;
                                to = TamUtils.ConvertToHour(TamUtils.ConvertToMinute(cioInDb.Out_Hh_Mm) + timeLeft);
                            } 
                            else
                            {
                                from = cioInDb.Out_Hh_Mm;
                                to = TamUtils.ConvertToHour(TamUtils.ConvertToMinute(cioInDb.Out_Hh_Mm) + timeLeft);
                            }

                            leavingRegistration = Build(from, to, cioInDb);

                            absenceList.Add(leavingRegistration);
                        }
                    } 
                    else
                    {
                        if (timeAbsence <= 240)
                        {
                            string from = Constants.HM_08_00;
                            string to = TamUtils.ConvertToHour(480 + timeAbsence);

                            leavingRegistration = Build(from, to, cioInDb);

                            absenceList.Add(leavingRegistration);
                        }
                        else 
                        {
                            int timeLeft = timeAbsence - 240;

                            if (out_Hh_Mm <= TamUtils.ConvertToMinute(Constants.HM_17_15))
                            {
                                //1
                                string from = Constants.HM_08_00;
                                string to = cioInDb.In_Hh_Mm;

                                leavingRegistration = Build(from, to, cioInDb);

                                absenceList.Add(leavingRegistration);

                                //2
                                from = cioInDb.Out_Hh_Mm;
                                to = Constants.HM_17_15;

                                leavingRegistration = Build(from, to, cioInDb);

                                absenceList.Add(leavingRegistration);
                            }
                            else
                            {
                                string from = Constants.HM_08_00;
                                string to = TamUtils.ConvertToHour(TamUtils.ConvertToMinute(Constants.HM_13_15) + timeLeft);

                                leavingRegistration = Build(from, to, cioInDb);

                                absenceList.Add(leavingRegistration);
                            }
                        }
                    }
                    
                    break;
            }
            //End switch

            //Insert data
            _db.AddRange(absenceList);
            _db.SaveChanges();
        }

        private LeavingRegistration Build(string from, string to, CheckInOut cioInDb)
        {
            LeavingRegistration leavingRegistration = new LeavingRegistration()
            {
                Cio_Cd = Guid.NewGuid(),
                Cio_Map_Cd = cioInDb.Cio_Map_Cd,
                Cio_Ymd = cioInDb.Cio_Ymd,
                Cio_Day = cioInDb.Cio_Day,
                Cio_State = 0,
                Insert_Ymd = DateTime.Now,
                Insert_Psn_Cd = cioInDb.Insert_Psn_Cd,
                In_Hh_Mm = from,
                Out_Hh_Mm = to,
                Cio_Duration = TamUtils.CalculateDuration(from, to)
            };

            return leavingRegistration;
        }
    }
}
