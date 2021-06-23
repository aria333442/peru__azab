import { deletelogconstants } from "../actions/constants";
const axios = require("axios");
export const deleteblo = (item) => {
  return async (disptach) => {
    disptach({ type: deletelogconstants.deletelogrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/blog/deleteblog`, { ...item })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: deletelogconstants.deletelogSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: deletelogconstants.deletelogfailure,
            payload: { message },
          });
        }
      });
  };
};
