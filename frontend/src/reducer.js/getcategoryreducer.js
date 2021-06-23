import { Getcategoryconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  category: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case Getcategoryconstants.Getcategoryrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case Getcategoryconstants.GetcategorySuccess: {
      state = {
        ...state,
        loading: false,
        category: action.payload.category,
      };
      break;
    }
    case Getcategoryconstants.Getcategoryfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
