using TAM_Backend.Common;
using TAM_Backend.DAO;
using TAM_Backend.Model.JsonModel;

namespace TAM_Backend.BLO
{
    public class AutheImplBLO : IAutheBLO
    {
        private IAutheDAO _autheDao { get; set; }

        public AutheImplBLO(IAutheDAO autheDao)
        {
            this._autheDao = autheDao;
        }

        public string DoLogin(string userId, string password)
        {
            int loginResult = _autheDao.QueryAccount(userId, password);

            if (loginResult != 1)
            {
                return Constants.ERR_MSG_001;
            }
            else
            {
                return string.Empty;
            }
        }

        public JsonStaff GetUserInf(string userId)
        {
            return _autheDao.QueryUser(userId);
        }

        public string Authorize(decimal dpm_Cd, string api_Cd)
        {
            if (!_autheDao.QueryRoleApi(dpm_Cd, api_Cd))
            {
                return Constants.ERR_MSG_002;
            }

            return string.Empty;
        }
    }
}
