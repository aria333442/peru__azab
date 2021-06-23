import { deletenewconstants } from "../actions/constants";
const axios = require("axios");
export const deletenew = (item) => {
  return async (disptach) => {
    disptach({ type: deletenewconstants.deletenewrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/product/deletenew`, {
        ...item,
      })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: deletenewconstants.deletenewSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: deletenewconstants.deletenewfailure,
            payload: { message },
          });
        }
      });
  };
};
