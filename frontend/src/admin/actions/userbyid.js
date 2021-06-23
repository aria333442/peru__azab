import { userbyidconstants } from "../actions/constants";
const axios = require("axios");
export const ubyid = (item) => {
  return async (disptach) => {
    disptach({ type: userbyidconstants.userbyidrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/user/userbyid`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { user } = res.data;
          disptach({
            type: userbyidconstants.userbyidSuccess,
            payload: {
              user,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: userbyidconstants.userbyidfailure,
            payload: { message },
          });
        }
      });
  };
};
