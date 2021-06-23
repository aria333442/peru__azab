import { Removeitemconstants } from "../actions/constants";
const axios = require("axios");
export const remove = (item) => {
  return async (disptach) => {
    disptach({ type: Removeitemconstants.Removeitemrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/deleteitem`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: Removeitemconstants.RemoveitemSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: Removeitemconstants.Removeitemfailure,
            payload: { message },
          });
        }
      });
  };
};
