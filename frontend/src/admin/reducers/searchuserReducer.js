import { searchuserconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  user: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case searchuserconstants.searchuserrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case searchuserconstants.searchuserSuccess: {
      state = {
        ...state,
        loading: false,
        user: action.payload.user,
      };
      break;
    }
    case searchuserconstants.searchuserfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
