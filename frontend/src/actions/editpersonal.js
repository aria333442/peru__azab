import { Editloginconstants } from "../actions/constants";
const axios = require("axios");
export const editP = (form) => {
  return async (disptach) => {
    disptach({ type: Editloginconstants.Editloginrequest });
    await axios
      .post("https://api.armea.atiksoluciones.com/edit/info", { ...form })
      .then((res) => {
        if (res.status === 201) {
          const { message, token, user } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          disptach({
            type: Editloginconstants.EditloginSuccess,
            payload: {
              message,
              token,
              user,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: Editloginconstants.Editloginfailure,
            payload: { message },
          });
        }
      });
  };
};
