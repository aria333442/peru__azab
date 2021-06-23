import { editshippingconstants } from "../actions/constants";
const axios = require("axios");
export const updateshipp = (item) => {
  return async (disptach) => {
    disptach({ type: editshippingconstants.editshippingrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/shipping/update`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: editshippingconstants.editshippingSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: editshippingconstants.updatenewfailure,
            payload: { message },
          });
        }
      });
  };
};
