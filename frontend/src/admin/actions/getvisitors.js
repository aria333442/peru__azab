import { getusersconstants } from "../actions/constants";
const axios = require("axios");
export const getusers = () => {
  return async (disptach) => {
    disptach({ type: getusersconstants.getusersrequest });
    await axios
      .get(`https://api.armea.atiksoluciones.com/visitor/get`)
      .then((res) => {
        if (res.status === 201) {
          const { newV, returning, allvisitors, users, alluser } = res.data;
          disptach({
            type: getusersconstants.getusersSuccess,
            payload: {
              newV,
              returning,
              allvisitors,
              users,
              alluser,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: getusersconstants.getusersfailure,
            payload: { message },
          });
        }
      });
  };
};
