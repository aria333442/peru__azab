import { getnewproductconstants } from "../actions/constants";
const axios = require("axios");
export const getnewprod = () => {
  return async (disptach) => {
    disptach({ type: getnewproductconstants.getnewproductrequest });
    await axios
      .get(`https://api.armea.atiksoluciones.com/product/new`)
      .then((res) => {
        if (res.status === 201) {
          const { product } = res.data;
          disptach({
            type: getnewproductconstants.getnewproductSuccess,
            payload: {
              product,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: getnewproductconstants.getnewproductfailure,
            payload: { message },
          });
        }
      });
  };
};
