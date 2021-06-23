import { createpopupconstants } from "../actions/constants";
const axios = require("axios");
export const createpop = (item) => {
  return async (disptach) => {
    disptach({ type: createpopupconstants.createpopuprequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/popup/create`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: createpopupconstants.createpopupSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: createpopupconstants.createpopupfailure,
            payload: { message },
          });
        }
      });
  };
};
