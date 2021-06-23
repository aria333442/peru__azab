import { getitconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  user: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case getitconstants.getitrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case getitconstants.getitSuccess: {
      state = {
        ...state,
        loading: false,
        user: action.payload.user,
      };
      break;
    }
    case getitconstants.getitfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
