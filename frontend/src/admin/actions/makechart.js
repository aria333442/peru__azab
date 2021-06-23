import { tableconstants } from "../actions/constants";
const axios = require("axios");
export const gettable = () => {
  return async (disptach) => {
    disptach({ type: tableconstants.tablerequest });
    await axios
      .get(`https://api.armea.atiksoluciones.com/order/weekdata`)
      .then((res) => {
        if (res.status === 201) {
          const {
            final,
            finale,
            Pendiente,
            Proceso,
            Enviado,
            Entregado,
            Pagado,
            canceladas,
            allorders,
            activeorders,
          } = res.data;
          disptach({
            type: tableconstants.tableSuccess,
            payload: {
              final,
              finale,
              Pendiente,
              Proceso,
              Enviado,
              Entregado,
              Pagado,
              canceladas,
              allorders,
              activeorders,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: tableconstants.tablefailure,
            payload: { message },
          });
        }
      });
  };
};
