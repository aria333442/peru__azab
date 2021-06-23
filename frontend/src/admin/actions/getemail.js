import { getemailconstants } from "../actions/constants";
const axios = require("axios");
export const getemail = () => {
  return async (disptach) => {
    disptach({ type: getemailconstants.getemailrequest });
    await axios
      .get(`https://api.armea.atiksoluciones.com/email/getemail`)
      .then((res) => {
        if (res.status === 201) {
          const { email } = res.data;
          disptach({
            type: getemailconstants.getemailSuccess,
            payload: {
              email,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: getemailconstants.getemailfailure,
            payload: { message },
          });
        }
      });
  };
};
