import { userordersconstants } from "../actions/constants";
const axios = require("axios");
export const getusord = () => {
  return async (disptach) => {
    disptach({ type: userordersconstants.userordersrequest });
    await axios
      .get(`https://api.armea.atiksoluciones.com/order/userorders`)
      .then((res) => {
        if (res.status === 201) {
          const { final, user } = res.data;
          disptach({
            type: userordersconstants.userordersSuccess,
            payload: {
              final,
              user,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: userordersconstants.userordersfailure,
            payload: { message },
          });
        }
      });
  };
};
