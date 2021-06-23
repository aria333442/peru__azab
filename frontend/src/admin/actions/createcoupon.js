import { createcouponconstants } from "../actions/constants";
const axios = require("axios");
export const createcoup = (item) => {
  return async (disptach) => {
    disptach({ type: createcouponconstants.createcouponrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/coupen/create`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: createcouponconstants.createcouponSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: createcouponconstants.createcouponfailure,
            payload: { message },
          });
        }
      });
  };
};
