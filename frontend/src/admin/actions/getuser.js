import { getitconstants } from "../actions/constants";
const axios = require("axios");
export const getuser = () => {
  return async (disptach) => {
    disptach({ type: getitconstants.getitrequest });
    await axios
      .get(`https://api.armea.atiksoluciones.com/user/getuser`)
      .then((res) => {
        if (res.status === 201) {
          const { user } = res.data;
          disptach({
            type: getitconstants.getitSuccess,
            payload: {
              user,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: getitconstants.getitfailure,
            payload: { message },
          });
        }
      });
  };
};
