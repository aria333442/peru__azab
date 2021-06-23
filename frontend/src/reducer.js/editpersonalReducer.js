import { Editloginconstants } from "../actions/constants";

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
    case Editloginconstants.Editloginrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case Editloginconstants.EditloginSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        token: action.payload.token,
        user: action.payload.user,
      };
      break;
    }
    case Editloginconstants.Editloginfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
