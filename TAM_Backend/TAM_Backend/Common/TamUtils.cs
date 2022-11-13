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
    }
}
