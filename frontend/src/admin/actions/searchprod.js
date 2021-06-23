import { searchproductconstants } from "../actions/constants";
const axios = require("axios");
export const serachprods = (item) => {
  return async (disptach) => {
    disptach({ type: searchproductconstants.searchproductrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/product/search`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { product } = res.data;
          disptach({
            type: searchproductconstants.searchproductSuccess,
            payload: {
              product,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: searchproductconstants.searchproductfailure,
            payload: { message },
          });
        }
      });
  };
};
