import { updatecategoryconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case updatecategoryconstants.updatecategoryrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case updatecategoryconstants.updatecategorySuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case updatecategoryconstants.updatecategoryfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
