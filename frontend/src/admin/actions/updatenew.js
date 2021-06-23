import { updatenewconstants } from "../actions/constants";
const axios = require("axios");
export const updatenew = (item) => {
  return async (disptach) => {
    disptach({ type: updatenewconstants.updatenewrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/product/updatenew`, {
        ...item,
      })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: updatenewconstants.updatenewSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: updatenewconstants.updatenewfailure,
            payload: { message },
          });
        }
      });
  };
};
