import { getcouponconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  coupon: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case getcouponconstants.getcouponrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case getcouponconstants.getcouponSuccess: {
      state = {
        ...state,
        loading: false,
        coupon: action.payload.coupon,
      };
      break;
    }
    case getcouponconstants.getcouponfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
