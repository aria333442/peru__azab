import { getpopupconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  popup: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case getpopupconstants.getpopuprequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case getpopupconstants.getpopupSuccess: {
      state = {
        ...state,
        loading: false,
        popup: action.payload.popup,
      };
      break;
    }
    case getpopupconstants.getpopupfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
