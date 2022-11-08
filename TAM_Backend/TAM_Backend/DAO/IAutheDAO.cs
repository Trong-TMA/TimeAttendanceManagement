using System;
using TAM_Backend.Model.JsonModel;

namespace TAM_Backend.DAO
{
    public interface IAutheDAO
    {
        public abstract int QueryAccount(string userId, string password);
        public abstract JsonStaff QueryUser(string userId);
    }
}
