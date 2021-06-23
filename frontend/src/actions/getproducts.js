import { GetProductsconstants } from "../actions/constants";
const axios = require("axios");
export const getprod = (checked, query) => {
  console.log(checked);
  return async (disptach) => {
    disptach({ type: GetProductsconstants.GetProductsrequest });
    await axios
      .post("https://api.armea.atiksoluciones.com/product/getall", {
        checked,
        query,
      })
      .then((res) => {
        if (res.status === 201) {
          const { products } = res.data;
          disptach({
            type: GetProductsconstants.GetProductsSuccess,
            payload: {
              products,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: GetProductsconstants.GetProductsfailure,
            payload: { message },
          });
        }
      });
  };
};
