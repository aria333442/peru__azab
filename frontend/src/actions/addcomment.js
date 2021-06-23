import { Addcommentconstants } from "../actions/constants";
const axios = require("axios");
export const addcom = (items) => {
  return async (disptach) => {
    disptach({ type: Addcommentconstants.Addcommentrequest });
    await axios
      .post("https://api.armea.atiksoluciones.com/blog/addcomment", {
        ...items,
      })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: Addcommentconstants.AddcommentSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: Addcommentconstants.Addcommentfailure,
            payload: { message },
          });
        }
      });
  };
};
