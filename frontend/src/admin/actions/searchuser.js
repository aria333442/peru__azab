import { searchuserconstants } from "../actions/constants";
const axios = require("axios");
export const serachus = (item) => {
  return async (disptach) => {
    disptach({ type: searchuserconstants.searchuserrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/user/searchuser`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { user } = res.data;
          disptach({
            type: searchuserconstants.searchuserSuccess,
            payload: {
              user,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: searchuserconstants.searchuserfailure,
            payload: { message },
          });
        }
      });
  };
};
