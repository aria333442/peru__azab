import { deletenewconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case deletenewconstants.deletenewrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case deletenewconstants.deletenewSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case deletenewconstants.deletenewfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
