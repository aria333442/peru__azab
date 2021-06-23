import { changestatusconstants } from "../actions/constants";
const axios = require("axios");
export const updatestat = (item) => {
  return async (disptach) => {
    disptach({ type: changestatusconstants.changestatusrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/order/updatestatus`, {
        ...item,
      })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: changestatusconstants.changestatusSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: changestatusconstants.changestatusfailure,
            payload: { message },
          });
        }
      });
  };
};
