import { Editdataloginconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  user: {
    name: "",
    email: "",
    _id: "",
    surename: "",
    country: "",
    region: "",
    shipping_Address: "",
    phone: "",
  },
  token: "",
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case Editdataloginconstants.Editdataloginrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case Editdataloginconstants.EditdataloginSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        token: action.payload.token,
        user: action.payload.user,
      };
      break;
    }
    case Editdataloginconstants.Editdataloginfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
