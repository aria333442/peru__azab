import { createshippingconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case createshippingconstants.createshippingrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case createshippingconstants.createshippingSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case createshippingconstants.createshippingfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
