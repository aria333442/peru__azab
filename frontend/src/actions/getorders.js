import { Getorderconstants } from "../actions/constants";
const axios = require("axios");
export const getorder = () => {
  return async (disptach) => {
    disptach({ type: Getorderconstants.Getorderrequest });
    await axios
      .get("https://api.armea.atiksoluciones.com/order/allorder")
      .then((res) => {
        if (res.status === 201) {
          const { orders } = res.data;
          disptach({
            type: Getorderconstants.GetorderSuccess,
            payload: {
              orders,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: Getorderconstants.Getorderfailure,
            payload: { message },
          });
        }
      });
  };
};
