import { getpopupconstants } from "../actions/constants";
const axios = require("axios");
export const getrepop = () => {
  return async (disptach) => {
    disptach({ type: getpopupconstants.getpopuprequest });
    await axios
      .get(`https://api.armea.atiksoluciones.com/popup/getpopup`)
      .then((res) => {
        if (res.status === 201) {
          const { popup } = res.data;
          disptach({
            type: getpopupconstants.getpopupSuccess,
            payload: {
              popup,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: getpopupconstants.getpopupfailure,
            payload: { message },
          });
        }
      });
  };
};
