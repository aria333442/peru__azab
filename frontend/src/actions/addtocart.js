import { Addtocartconstants } from "../actions/constants";
const axios = require("axios");
export const addtocart = (items) => {
  return async (disptach) => {
    disptach({ type: Addtocartconstants.Addtocartrequest });
    await axios
      .post("https://api.armea.atiksoluciones.com/cart/addtocart", { ...items })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          disptach({
            type: Addtocartconstants.AddtocartSuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: Addtocartconstants.Addtocartfailure,
            payload: { message },
          });
        }
      });
  };
};
