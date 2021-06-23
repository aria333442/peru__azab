import { createsubcatconstants } from "../actions/constants";
const axios = require("axios");
export const createsubcat = (item) => {
  return async (disptach) => {
    disptach({ type: createsubcatconstants.createsubcatrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/subcategory/create`, {
        ...item,
      })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: createsubcatconstants.createsubcatSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: createsubcatconstants.createsubcatfailure,
            payload: { message },
          });
        }
      });
  };
};
