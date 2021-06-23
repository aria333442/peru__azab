import { Editdataloginconstants } from "../actions/constants";
const axios = require("axios");
export const editD = (form) => {
  return async (disptach) => {
    disptach({ type: Editdataloginconstants.Editdataloginrequest });
    await axios
      .post("https://api.armea.atiksoluciones.com/edit/editdata", { ...form })
      .then((res) => {
        if (res.status === 201) {
          const { message, token, user } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          disptach({
            type: Editdataloginconstants.EditdataloginSuccess,
            payload: {
              message,
              token,
              user,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          disptach({
            type: Editdataloginconstants.Editdataloginfailure,
            payload: { message },
          });
        }
      });
  };
};
