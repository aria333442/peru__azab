import { Registermconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  val: "",
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case Registermconstants.Registermrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case Registermconstants.RegistermSuccess: {
      state = {
        ...state,
        loading: false,

        val: action.payload.val,
        message: action.payload.message,
      };
      break;
    }
    case Registermconstants.Registermfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
