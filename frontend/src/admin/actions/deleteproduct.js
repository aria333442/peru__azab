import { deleteproductconstants } from "../actions/constants";
const axios = require("axios");
export const deleteprod = (item) => {
  return async (disptach) => {
    disptach({ type: deleteproductconstants.deleteproductrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/product/deleteprod`, {
        ...item,
      })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: deleteproductconstants.deleteproductSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: deleteproductconstants.deleteproductfailure,
            payload: { message },
          });
        }
      });
  };
};
