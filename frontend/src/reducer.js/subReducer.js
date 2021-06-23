import { Subscribeconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case Subscribeconstants.Subscriberequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case Subscribeconstants.SubscribeSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case Subscribeconstants.Subscribefailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
