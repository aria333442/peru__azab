import { createpopupconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case createpopupconstants.createpopuprequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case createpopupconstants.createpopupSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case createpopupconstants.createpopupfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
