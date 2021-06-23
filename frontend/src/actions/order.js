import { createorderconstants } from "../actions/constants";
const axios = require("axios");
export const addord = (items) => {
  return async (disptach) => {
    disptach({ type: createorderconstants.createorderrequest });
    await axios
      .post("https://api.armea.atiksoluciones.com/order/create", { ...items })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: createorderconstants.createorderSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: createorderconstants.createorderfailure,
            payload: { message },
          });
        }
      });
  };
};
