import { deletecouponconstants } from "../actions/constants";
const axios = require("axios");
export const deletecoupon = (item) => {
  return async (disptach) => {
    disptach({ type: deletecouponconstants.deletecouponrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/coupen/delete`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: deletecouponconstants.deletecouponSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: deletecouponconstants.deletecouponfailure,
            payload: { message },
          });
        }
      });
  };
};
