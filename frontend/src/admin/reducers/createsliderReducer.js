import { createsliderconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case createsliderconstants.createsliderrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case createsliderconstants.createsliderSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case createsliderconstants.createsliderfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
