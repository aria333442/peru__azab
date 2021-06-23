import { getproductinfoconstants } from "../actions/constants";
const axios = require("axios");
export const getproducts = () => {
  return async (disptach) => {
    disptach({ type: getproductinfoconstants.getproductinforequest });
    await axios
      .get(`https://api.armea.atiksoluciones.com/product/getinfo`)
      .then((res) => {
        if (res.status === 201) {
          const { Muebles, Decoración, Mascotas, Niños, allproducts } =
            res.data;
          disptach({
            type: getproductinfoconstants.getproductinfoSuccess,
            payload: {
              Muebles,
              Decoración,
              Mascotas,
              Niños,
              allproducts,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: getproductinfoconstants.getproductinfofailure,
            payload: { message },
          });
        }
      });
  };
};
