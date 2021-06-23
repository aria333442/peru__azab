import { Subscribeconstants } from "../actions/constants";
const axios = require("axios");
export const subs = (email) => {
  return async (disptach) => {
    disptach({ type: Subscribeconstants.Subscriberequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/user/subscribe`, { email })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: Subscribeconstants.SubscribeSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: Subscribeconstants.Subscribefailure,
            payload: { message },
          });
        }
      });
  };
};
