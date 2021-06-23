import { userordersconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  final: [],
  user: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case userordersconstants.userordersrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case userordersconstants.userordersSuccess: {
      state = {
        ...state,
        loading: false,
        final: action.payload.final,
        user: action.payload.user,
      };
      break;
    }
    case userordersconstants.userordersfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
