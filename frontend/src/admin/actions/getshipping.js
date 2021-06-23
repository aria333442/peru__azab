import { getshippingconstants } from "../actions/constants";
const axios = require("axios");
export const getshipp = () => {
  return async (disptach) => {
    disptach({ type: getshippingconstants.getshippingrequest });
    await axios
      .get(`https://api.armea.atiksoluciones.com/shipping/getit`)
      .then((res) => {
        if (res.status === 201) {
          const { ship } = res.data;
          disptach({
            type: getshippingconstants.getshippingSuccess,
            payload: {
              ship,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: getshippingconstants.getshippingfailure,
            payload: { message },
          });
        }
      });
  };
};
