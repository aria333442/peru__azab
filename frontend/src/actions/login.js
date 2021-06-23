import { Loginconstants, logiutconstants } from "../actions/constants";
const axios = require("axios");
export const logg = (user) => {
  return async (disptach) => {
    disptach({ type: Loginconstants.Loginrequest });
    await axios
      .post("https://api.armea.atiksoluciones.com/logins", { ...user })
      .then((res) => {
        if (res.status === 201) {
          const { message, token, user } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          disptach({
            type: Loginconstants.LoginSuccess,
            payload: {
              message,
              token,
              user,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: Loginconstants.Loginfailure,
            payload: { message },
          });
        }
      });
  };
};
export const logO = () => {
  return async (disptach) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    const token = localStorage.getItem("token");
    if (token === null) {
      disptach({
        type: logiutconstants.logiutSuccess,
        payload: {
          message: "logout successfully",
        },
      });
    } else {
      disptach({
        type: logiutconstants.logiutfailure,
        payload: {
          message: "logout successfully",
        },
      });
    }
  };
};
