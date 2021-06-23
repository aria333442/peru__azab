import { Registermconstants } from "../actions/constants";
const axios = require("axios");
export const rigg = (form) => {
  return async (disptach) => {
    disptach({ type: Registermconstants.Registermrequest });
    await axios
      .post("https://api.armea.atiksoluciones.com/register", { ...form })
      .then((res) => {
        if (res.status === 201) {
          const { val, message } = res.data;
          localStorage.setItem("code", val);

          disptach({
            type: Registermconstants.RegistermSuccess,
            payload: {
              val,
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: Registermconstants.Registermfailure,
            payload: { message },
          });
        }
      });
  };
};
