import { deletelogconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case deletelogconstants.deletelogrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case deletelogconstants.deletelogSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case deletelogconstants.deletelogfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
