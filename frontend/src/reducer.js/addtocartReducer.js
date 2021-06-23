import { Addtocartconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case Addtocartconstants.Addtocartrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case Addtocartconstants.AddtocartSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case Addtocartconstants.Addtocartfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
