import { createnewconstants } from "../actions/constants";
const axios = require("axios");
export const createnew = (item) => {
  return async (disptach) => {
    disptach({ type: createnewconstants.createnewrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/product/createnew`, {
        ...item,
      })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: createnewconstants.createnewSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: createnewconstants.createnewfailure,
            payload: { message },
          });
        }
      });
  };
};
