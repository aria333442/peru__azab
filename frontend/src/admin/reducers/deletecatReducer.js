import { deletecateconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case deletecateconstants.deletecaterequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case deletecateconstants.deletecateSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case deletecateconstants.deletecatefailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
