using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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

                    } catch (Exception ex)
                    {
                        Console.WriteLine(ex.Message);
                        return -1;
                    }
                    
                }

            }

            return -1;
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
    }
}
