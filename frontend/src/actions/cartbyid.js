import { Cartbyidconstants } from "../actions/constants";
const axios = require("axios");
export const CbyId = (Cid) => {
  return async (disptach) => {
    disptach({ type: Cartbyidconstants.Cartbyidrequest });
    await axios
      .post("https://api.armea.atiksoluciones.com/cart/getcart", { Cid })
      .then((res) => {
        if (res.status === 201) {
          const { item, total, category } = res.data;
          disptach({
            type: Cartbyidconstants.CartbyidSuccess,
            payload: {
              item,
              total,
              category,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: Cartbyidconstants.Cartbyidfailure,
            payload: { message },
          });
        }
      });
  };
};
