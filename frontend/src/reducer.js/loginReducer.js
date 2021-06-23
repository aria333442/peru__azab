import { Loginconstants, logiutconstants } from "../actions/constants";

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
  logout: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case Loginconstants.Loginrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case Loginconstants.LoginSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        token: action.payload.token,
        user: action.payload.user,
      };
      break;
    }
    case Loginconstants.Loginfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case logiutconstants.logiutSuccess: {
      state = {
        ...initialstate,
        logout: true,
        message: action.payload.message,
      };
    }
  }
  return state;
};
