import { deezerApi } from "../../utils/config";

export default {
  /** Send a POST request to Resend OTP */
  async searchArtiste(searchTerm) {
    return deezerApi.post(`earch?q=${searchTerm}`);
  },

  /** Send a POST request to Resend OTP */
  // async UpdateUser(LastPeriodDate, PeriodLength, periodExperience) {
  //   const data = {
  //     period_date: LastPeriodDate,
  //     period_length: PeriodLength,
  //     period_experience: periodExperience,
  //   };
  //   return deezerApi.post("auth/user/update", data);
  // },
};
