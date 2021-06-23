import { getcouponconstants } from "../actions/constants";
const axios = require("axios");
export const getcoupon = () => {
  return async (disptach) => {
    disptach({ type: getcouponconstants.getcouponrequest });
    await axios
      .get(`https://api.armea.atiksoluciones.com/coupon/getcoupon`)
      .then((res) => {
        if (res.status === 201) {
          const { coupon } = res.data;
          disptach({
            type: getcouponconstants.getcouponSuccess,
            payload: {
              coupon,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: getcouponconstants.getcouponfailure,
            payload: { message },
          });
        }
      });
  };
};
