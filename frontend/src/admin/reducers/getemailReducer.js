import { getemailconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  email: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case getemailconstants.getemailrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case getemailconstants.getemailSuccess: {
      state = {
        ...state,
        loading: false,
        email: action.payload.email,
      };
      break;
    }
    case getemailconstants.getemailfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
