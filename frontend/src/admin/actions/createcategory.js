import { createcatconstants } from "../actions/constants";
const axios = require("axios");
export const createcat = (item) => {
  return async (disptach) => {
    disptach({ type: createcatconstants.createcatrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/category/create`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: createcatconstants.createcatSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: createcatconstants.createcatfailure,
            payload: { message },
          });
        }
      });
  };
};
