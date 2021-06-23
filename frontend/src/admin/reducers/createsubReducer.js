import { createsubcatconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case createsubcatconstants.createsubcatrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case createsubcatconstants.createsubcatSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case createsubcatconstants.createsubcatfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
