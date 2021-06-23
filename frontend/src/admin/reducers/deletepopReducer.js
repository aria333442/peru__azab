import { deletepopupconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case deletepopupconstants.deletepopuprequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case deletepopupconstants.deletepopupSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case deletepopupconstants.deletepopupfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
