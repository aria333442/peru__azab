import { getsliderconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  slider: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case getsliderconstants.getsliderrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case getsliderconstants.getsliderSuccess: {
      state = {
        ...state,
        loading: false,
        slider: action.payload.slider,
      };
      break;
    }
    case getsliderconstants.getsliderfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
