import { orderbydateconstants } from "../actions/constants";
const axios = require("axios");
export const ordbydate = (item) => {
  return async (disptach) => {
    disptach({ type: orderbydateconstants.orderbydaterequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/order/bydatee`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { order } = res.data;
          disptach({
            type: orderbydateconstants.orderbydateSuccess,
            payload: {
              order,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: orderbydateconstants.orderbydatefailure,
            payload: { message },
          });
        }
      });
  };
};
