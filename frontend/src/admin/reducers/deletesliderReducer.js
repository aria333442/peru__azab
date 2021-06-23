import { deletesliderconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case deletesliderconstants.deletesliderrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case deletesliderconstants.deletesliderSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case deletesliderconstants.deletesliderfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
