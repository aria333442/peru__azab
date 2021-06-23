import { adminloginconstants } from "../actions/constants";
const axios = require("axios");
export const adminlogg = (user) => {
  return async (disptach) => {
    disptach({ type: adminloginconstants.adminloginrequest });
    await axios
      .post("https://api.armea.atiksoluciones.com/admin/adminlogin", {
        ...user,
      })
      .then((res) => {
        if (res.status === 201) {
          const { message, token, user } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          disptach({
            type: adminloginconstants.adminloginSuccess,
            payload: {
              message,
              token,
              user,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: adminloginconstants.adminloginfailure,
            payload: { message },
          });
        }
      });
  };
};
