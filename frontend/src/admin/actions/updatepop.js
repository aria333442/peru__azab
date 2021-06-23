import { updatepopupconstants } from "../actions/constants";
const axios = require("axios");
export const updatepop = (item) => {
  return async (disptach) => {
    disptach({ type: updatepopupconstants.updatepopuprequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/popup/update`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: updatepopupconstants.updatepopupSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: updatepopupconstants.updatepopupfailure,
            payload: { message },
          });
        }
      });
  };
};
