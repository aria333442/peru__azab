import { Productbyidsconstants } from "../actions/constants";
const axios = require("axios");
export const getPbyId = (Id) => {
  return async (disptach) => {
    disptach({ type: Productbyidsconstants.Productbyidsrequest });
    await axios
      .get(`https://api.armea.atiksoluciones.com/product/get/${Id}`)
      .then((res) => {
        if (res.status === 201) {
          const { product } = res.data;
          disptach({
            type: Productbyidsconstants.ProductbyidsSuccess,
            payload: {
              product,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: Productbyidsconstants.Productbyidsfailure,
            payload: { message },
          });
        }
      });
  };
};
