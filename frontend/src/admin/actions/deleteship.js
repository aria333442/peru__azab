import { deleteshippingconstants } from "../actions/constants";
const axios = require("axios");
export const deleteship = (item) => {
  return async (disptach) => {
    disptach({ type: deleteshippingconstants.deleteshippingrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/shipping/delete`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: deleteshippingconstants.deleteshippingSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: deleteshippingconstants.deleteshippingfailure,
            payload: { message },
          });
        }
      });
  };
};
