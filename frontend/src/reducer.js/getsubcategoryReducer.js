import { Getsubcategoryconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  subcategory: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case Getsubcategoryconstants.Getsubcategoryrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case Getsubcategoryconstants.GetsubcategorySuccess: {
      state = {
        ...state,
        loading: false,
        subcategory: action.payload.subcategory,
      };
      break;
    }
    case Getsubcategoryconstants.Getsubcategoryfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
