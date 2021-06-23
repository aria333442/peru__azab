import { createemailconstants } from "../actions/constants";
const axios = require("axios");
export const createemail = (item) => {
  return async (disptach) => {
    disptach({ type: createemailconstants.createemailrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/email/create`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: createemailconstants.createemailSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: createemailconstants.createemailfailure,
            payload: { message },
          });
        }
      });
  };
};
