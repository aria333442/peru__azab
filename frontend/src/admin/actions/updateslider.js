import { updatesliderconstants } from "../actions/constants";
const axios = require("axios");
export const updateslide = (item) => {
  return async (disptach) => {
    disptach({ type: updatesliderconstants.updatesliderrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/slider/update`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: updatesliderconstants.updatesliderSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: updatesliderconstants.updatesliderfailure,
            payload: { message },
          });
        }
      });
  };
};
