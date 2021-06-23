import { Searchconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  products: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case Searchconstants.Searchrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case Searchconstants.SearchSuccess: {
      state = {
        ...state,
        loading: false,
        products: action.payload.products,
      };
      break;
    }
    case Searchconstants.Searchfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
