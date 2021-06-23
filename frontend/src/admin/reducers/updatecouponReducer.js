import { updatecouponconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case updatecouponconstants.updatecouponrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case updatecouponconstants.updatecouponSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case updatecouponconstants.updatecouponfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
