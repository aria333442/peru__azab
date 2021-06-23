import { makeadminconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case makeadminconstants.makeadminrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case makeadminconstants.makeadminSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case makeadminconstants.makeadminfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
