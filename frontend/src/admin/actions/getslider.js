import { getsliderconstants } from "../actions/constants";
const axios = require("axios");
export const getslidw = () => {
  return async (disptach) => {
    disptach({ type: getsliderconstants.getsliderrequest });
    await axios
      .get(`https://api.armea.atiksoluciones.com/slider/getslider`)
      .then((res) => {
        if (res.status === 201) {
          const { slider } = res.data;
          disptach({
            type: getsliderconstants.getsliderSuccess,
            payload: {
              slider,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: getsliderconstants.getsliderfailure,
            payload: { message },
          });
        }
      });
  };
};
