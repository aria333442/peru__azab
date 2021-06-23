import { Removeitemconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case Removeitemconstants.Removeitemrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case Removeitemconstants.RemoveitemSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case Removeitemconstants.Removeitemfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
