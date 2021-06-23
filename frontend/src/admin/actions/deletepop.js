import { deletepopupconstants } from "../actions/constants";
const axios = require("axios");
export const deletepop = (item) => {
  return async (disptach) => {
    disptach({ type: deletepopupconstants.deletepopuprequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/popup/delete`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: deletepopupconstants.deletepopupSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: deletepopupconstants.deletepopupfailure,
            payload: { message },
          });
        }
      });
  };
};
