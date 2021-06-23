import { deletesliderconstants } from "../actions/constants";
const axios = require("axios");
export const deleteslide = (item) => {
  return async (disptach) => {
    disptach({ type: deletesliderconstants.deletesliderrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/slider/delete`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: deletesliderconstants.deletesliderSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: deletesliderconstants.deletesliderfailure,
            payload: { message },
          });
        }
      });
  };
};
