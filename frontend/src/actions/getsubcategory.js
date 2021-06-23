import { Getsubcategoryconstants } from "../actions/constants";
const axios = require("axios");
export const getsubcat = () => {
  return async (disptach) => {
    disptach({ type: Getsubcategoryconstants.Getsubcategoryrequest });
    await axios
      .get("https://api.armea.atiksoluciones.com/subcategory/getall")
      .then((res) => {
        if (res.status === 201) {
          const { subcategory } = res.data;
          disptach({
            type: Getsubcategoryconstants.GetsubcategorySuccess,
            payload: {
              subcategory,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: Getsubcategoryconstants.Getsubcategoryfailure,
            payload: { message },
          });
        }
      });
  };
};
