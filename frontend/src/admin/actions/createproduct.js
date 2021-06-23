import { createproductconstants } from "../actions/constants";
const axios = require("axios");
export const createprod = (item) => {
  return async (disptach) => {
    disptach({ type: createproductconstants.createproductrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/product/create`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: createproductconstants.createproductSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: createproductconstants.createproductfailure,
            payload: { message },
          });
        }
      });
  };
};
