import { adminloginconstants } from "../actions/constants";

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
    case adminloginconstants.adminloginrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case adminloginconstants.adminloginSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        token: action.payload.token,
        user: action.payload.user,
      };
      break;
    }
    case adminloginconstants.adminloginfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
  }
  return state;
};
