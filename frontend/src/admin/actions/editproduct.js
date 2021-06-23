import { editproductconstants } from "../actions/constants";
const axios = require("axios");
export const updateprod = (item) => {
  return async (disptach) => {
    disptach({ type: editproductconstants.editproductrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/product/updateproduct`, {
        ...item,
      })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: editproductconstants.editproductSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: editproductconstants.editproductfailure,
            payload: { message },
          });
        }
      });
  };
};
