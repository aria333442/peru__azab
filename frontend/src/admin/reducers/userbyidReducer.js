import { userbyidconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  user: {
    verified: "",
    orders: "",
    name: "",
    surname: "",
    fullname: "",
    email: "",
    region: "",
    shipping_Address: "",
    date: "",
    phone: "",
    postalcode: "",
  },
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case userbyidconstants.userbyidrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case userbyidconstants.userbyidSuccess: {
      state = {
        ...state,
        loading: false,
        user: action.payload.user,
      };
      break;
    }
    case userbyidconstants.userbyidfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
