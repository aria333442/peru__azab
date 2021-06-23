import { updatenewconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case updatenewconstants.updatenewrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case updatenewconstants.updatenewSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case updatenewconstants.updatenewfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
