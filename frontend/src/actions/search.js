import { Searchconstants } from "../actions/constants";
const axios = require("axios");
export const searchP = (query) => {
  return async (disptach) => {
    disptach({ type: Searchconstants.Searchrequest });
    await axios
      .get(`https://api.armea.atiksoluciones.com/searchproducts?query=${query}`)
      .then((res) => {
        if (res.status === 201) {
          const { products } = res.data;
          disptach({
            type: Searchconstants.SearchSuccess,
            payload: {
              products,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: Searchconstants.Searchfailure,
            payload: { message },
          });
        }
      });
  };
};
