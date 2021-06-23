import { profileconstants } from "../actions/constants";
const axios = require("axios");
export const prof = (user) => {
  return async (disptach) => {
    disptach({ type: profileconstants.profilerequest });
    await axios
      .post("https://api.armea.atiksoluciones.com/user/addimage", { ...user })
      .then((res) => {
        if (res.status === 201) {
          const { message, user } = res.data;
          localStorage.setItem("user", JSON.stringify(user));
          disptach({
            type: profileconstants.profileSuccess,
            payload: {
              message,
              user,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: profileconstants.profilefailure,
            payload: { message },
          });
        }
      });
  };
};
