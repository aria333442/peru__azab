import { createblogconstants } from "../actions/constants";
const axios = require("axios");
export const createblo = (item) => {
  return async (disptach) => {
    disptach({ type: createblogconstants.createblogrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/blog/create`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: createblogconstants.createblogSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: createblogconstants.createblogfailure,
            payload: { message },
          });
        }
      });
  };
};
