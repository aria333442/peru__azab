import { createshippingconstants } from "../actions/constants";
const axios = require("axios");
export const createshipp = (item) => {
  return async (disptach) => {
    disptach({ type: createshippingconstants.createshippingrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/shipping/create`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: createshippingconstants.createshippingSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: createshippingconstants.createshippingfailure,
            payload: { message },
          });
        }
      });
  };
};
