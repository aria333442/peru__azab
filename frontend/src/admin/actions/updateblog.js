import { updateblogconstants } from "../actions/constants";
const axios = require("axios");
export const updateblo = (item) => {
  return async (disptach) => {
    disptach({ type: updateblogconstants.updateblogrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/blog/editblog`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: updateblogconstants.updateblogSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: updateblogconstants.updateblogfailure,
            payload: { message },
          });
        }
      });
  };
};
