import { createcouponconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case createcouponconstants.createcouponrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case createcouponconstants.createcouponSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case createcouponconstants.createcouponfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
