using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model.JsonModel;

namespace TAM_Backend.Common
{
    public class TamUtils
    {
        public static int ConvertToMinute(string hh_Mm)
        {
            if (!string.IsNullOrEmpty(hh_Mm) && hh_Mm.Length == 5)
            {
                string[] time = hh_Mm.Split(':');

                if (time.Length == 2)
                {
                    try
                    {
                        int hh = Int32.Parse(time[0]);
                        int mm = Int32.Parse(time[1]);

                        if (0 <= hh && hh <= 23 && 0 <= mm && mm <= 59)
                        {
                            return hh * 60 + mm;
                        }

                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex.Message);
                        return -1;
                    }

                }

            }

            return -1;
        }

        public static string ConvertToHour(int minute)
        {
            string hh = (minute / 60).ToString("D2");
            string mm = (minute % 60).ToString("D2");

            return hh + ":" + mm;
        }

        public static int CalculateDuration(string hh_Mm_From, string hh_Mm_To)
        {
            int hh_Mm_From_Int = ConvertToMinute(hh_Mm_From);
            int hh_Mm_To_Int = ConvertToMinute(hh_Mm_To);
            int hm_12_00 = ConvertToMinute(Constants.HM_12_00);
            int hm_13_15 = ConvertToMinute(Constants.HM_13_15);

            int duration;
            if (hh_Mm_From_Int <= hm_12_00)
            {
                if (hh_Mm_To_Int <= hm_13_15)
                {
                    duration = hh_Mm_To_Int - hh_Mm_From_Int;
                }
                else
                {
                    duration = (hm_12_00 - hh_Mm_From_Int) + (hh_Mm_To_Int - hm_13_15);
                }
            }
            else
            {
                duration = hh_Mm_To_Int - hh_Mm_From_Int;
            }

            return duration;
        }

        public static int ExportState(string hh_Mm_From, int duration)
        {
            int hh_Mm_From_Int = ConvertToMinute(hh_Mm_From);

            int hm_09_00 = ConvertToMinute(Constants.HM_09_00);

            int state;
            if (hh_Mm_From_Int < hm_09_00)
            {

                if (duration < 480)
                {
                    //Return: early to work, work not enough required time
                    state = Constants.STT_000;
                }
                else
                {
                    //Return: early to work, , work enough required time
                    state = Constants.STT_001;
                }
            }
            else
            {
                if (duration < 480)
                {
                    //Return: late to work, not working stoppage
                    state = Constants.STT_002;
                }
                else
                {
                    //Return: late to work, working stoppage
                    state = Constants.STT_003;
                }
            }
            return state;
        }

        //Returns day of week from yyyymmdd
        public static string GetDayOfWeek(string ymd)
        {
            try
            {
                int yyyy = Int32.Parse(ymd.Substring(0, 4));
                int mm = Int32.Parse(ymd.Substring(4, 2));
                int dd = Int32.Parse(ymd.Substring(6, 2));

                DateTime date = new DateTime(yyyy, mm, dd);

                switch (date.DayOfWeek.ToString())
                {
                    case "Monday":
                        return Constants.MON;
                    case "Tuesday":
                        return Constants.TUE;
                    case "Wednesday":
                        return Constants.WED;
                    case "Thursday":
                        return Constants.THU;
                    case "Friday":
                        return Constants.FRI;
                    case "Saturday":
                        return Constants.SAT;
                    case "Sunday":
                        return Constants.SUN;
                    default:
                        return string.Empty;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return string.Empty;
            }
        }
        public static List<JsonCalendar> GetCalendar(int year, int month)
        {
            var dateList = new List<JsonCalendar>();

            JsonCalendar jsCalendar;
            string dayOfWeek;
            int week = 1;

            // Loop from the first day of the month until we hit the next month, moving forward a day at a time
            for (var date = new DateTime(year, month, 1); date.Month == month; date = date.AddDays(1))
            {
                dayOfWeek = TamUtils.GetDayOfWeek(date.ToString("yyyyMMdd"));

                jsCalendar = new JsonCalendar()
                {
                    Date = date.ToString("yyyyMMdd"),
                    DayOfWeek = dayOfWeek,
                    Week = week
                };

                if (dayOfWeek.Equals(Constants.SUN))
                {
                    week++;
                }

                dateList.Add(jsCalendar);
            }

            return dateList;
        }
    }
}
