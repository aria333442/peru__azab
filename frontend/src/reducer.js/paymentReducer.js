import { paymentconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  status: "",
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case paymentconstants.paymentrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case paymentconstants.paymentSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        status: action.payload.status,
      };
      break;
    }
    case paymentconstants.paymentfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
