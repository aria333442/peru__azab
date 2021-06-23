import { profileconstants } from "../actions/constants";

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
    image: "",
  },
  logout: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case profileconstants.profilerequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case profileconstants.profileSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        user: action.payload.user,
      };
      break;
    }
    case profileconstants.profilefailure: {
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
