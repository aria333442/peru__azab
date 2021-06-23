import { makeadminconstants } from "../actions/constants";
const axios = require("axios");
export const makeadd = (item) => {
  return async (disptach) => {
    disptach({ type: makeadminconstants.makeadminrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/admin/makeadmin`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: makeadminconstants.makeadminSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: makeadminconstants.makeadminfailure,
            payload: { message },
          });
        }
      });
  };
};
