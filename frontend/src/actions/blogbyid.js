import { Getblogbyidconstants } from "../actions/constants";
const axios = require("axios");
export const getBbyId = (Id) => {
  return async (disptach) => {
    disptach({ type: Getblogbyidconstants.Getblogbyidrequest });
    await axios
      .get(`https://api.armea.atiksoluciones.com/blog/getblog/${Id}`)
      .then((res) => {
        if (res.status === 201) {
          const { blog } = res.data;
          disptach({
            type: Getblogbyidconstants.GetblogbyidSuccess,
            payload: {
              blog,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: Getblogbyidconstants.Getblogbyidfailure,
            payload: { message },
          });
        }
      });
  };
};
