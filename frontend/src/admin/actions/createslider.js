import { createsliderconstants } from "../actions/constants";
const axios = require("axios");
export const createslide = (item) => {
  return async (disptach) => {
    disptach({ type: createsliderconstants.createsliderrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/slider/create`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: createsliderconstants.createsliderSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: createsliderconstants.createsliderfailure,
            payload: { message },
          });
        }
      });
  };
};
