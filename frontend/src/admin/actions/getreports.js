import { getreportsconstants } from "../actions/constants";
const axios = require("axios");
export const getreport = (item) => {
  return async (disptach) => {
    disptach({ type: getreportsconstants.getreportsrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/orders/reports`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { result } = res.data;
          disptach({
            type: getreportsconstants.getreportsSuccess,
            payload: {
              result,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: getreportsconstants.getreportsfailure,
            payload: { message },
          });
        }
      });
  };
};
