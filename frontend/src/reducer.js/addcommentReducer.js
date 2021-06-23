import { Addcommentconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case Addcommentconstants.Addcommentrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case Addcommentconstants.AddcommentSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case Addcommentconstants.Addcommentfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
