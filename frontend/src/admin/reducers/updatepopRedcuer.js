import { updatepopupconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case updatepopupconstants.updatepopuprequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case updatepopupconstants.updatepopupSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case updatepopupconstants.updatepopupfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
