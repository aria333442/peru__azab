import { updatesliderconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case updatesliderconstants.updatesliderrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case updatesliderconstants.updatesliderSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case updatesliderconstants.updatesliderfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
