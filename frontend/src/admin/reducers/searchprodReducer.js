import { searchproductconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  product: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case searchproductconstants.searchproductrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case searchproductconstants.searchproductSuccess: {
      state = {
        ...state,
        loading: false,
        product: action.payload.product,
      };
      break;
    }
    case searchproductconstants.searchproductfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
