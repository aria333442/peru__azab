import { paymentconstants } from "../actions/constants";
const axios = require("axios");
export const payit = (items) => {
  return async (disptach) => {
    disptach({ type: paymentconstants.paymentrequest });
    await axios
      .post("https://api.armea.atiksoluciones.com/order/makepayment", {
        ...items,
      })
      .then((res) => {
        if (res.status === 201) {
          const { message, status } = res.data;
          disptach({
            type: paymentconstants.paymentSuccess,
            payload: {
              message,
              status,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: paymentconstants.paymentfailure,
            payload: { message },
          });
        }
      });
  };
};
