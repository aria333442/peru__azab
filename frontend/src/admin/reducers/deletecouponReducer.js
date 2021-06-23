import { deletecouponconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case deletecouponconstants.deletecouponrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case deletecouponconstants.deletecouponSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case deletecouponconstants.deletecouponfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
