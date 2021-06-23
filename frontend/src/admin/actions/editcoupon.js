import { updatecouponconstants } from "../actions/constants";
const axios = require("axios");
export const updatecoupon = (item) => {
  return async (disptach) => {
    disptach({ type: updatecouponconstants.updatecouponrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/coupen/update`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: updatecouponconstants.updatecouponSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: updatecouponconstants.updatecouponfailure,
            payload: { message },
          });
        }
      });
  };
};
