import { deletecateconstants } from "../actions/constants";
const axios = require("axios");
export const deletecatee = (item) => {
  return async (disptach) => {
    disptach({ type: deletecateconstants.deletecaterequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/category/deletecat`, {
        ...item,
      })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: deletecateconstants.deletecateSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: deletecateconstants.deletecatefailure,
            payload: { message },
          });
        }
      });
  };
};
