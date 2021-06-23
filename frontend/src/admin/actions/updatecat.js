import { updatecategoryconstants } from "../actions/constants";
const axios = require("axios");
export const updatecat = (item) => {
  return async (disptach) => {
    disptach({ type: updatecategoryconstants.updatecategoryrequest });
    await axios
      .post(`https://api.armea.atiksoluciones.com/category/editcategory`, {
        ...item,
      })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: updatecategoryconstants.updatecategorySuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: updatecategoryconstants.updatecategoryfailure,
            payload: { message },
          });
        }
      });
  };
};
