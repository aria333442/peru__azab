import { Getcategoryconstants } from "../actions/constants";
const axios = require("axios");
export const getcat = () => {
  return async (disptach) => {
    disptach({ type: Getcategoryconstants.Getcategoryrequest });
    await axios
      .get("https://api.armea.atiksoluciones.com/category/getcategory")
      .then((res) => {
        if (res.status === 201) {
          const { category } = res.data;
          disptach({
            type: Getcategoryconstants.GetcategorySuccess,
            payload: {
              category,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: Getcategoryconstants.Getcategoryfailure,
            payload: { message },
          });
        }
      });
  };
};
