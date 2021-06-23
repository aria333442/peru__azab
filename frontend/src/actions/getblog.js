import { Getblogconstants } from "../actions/constants";
const axios = require("axios");
export const getblog = () => {
  return async (disptach) => {
    disptach({ type: Getblogconstants.Getblogrequest });
    await axios
      .get("https://api.armea.atiksoluciones.com/blog/get")
      .then((res) => {
        if (res.status === 201) {
          const { blog } = res.data;
          disptach({
            type: Getblogconstants.GetblogSuccess,
            payload: {
              blog,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: Getblogconstants.Getblogfailure,
            payload: { message },
          });
        }
      });
  };
};
