import { getnewproductconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  product: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case getnewproductconstants.getnewproductrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case getnewproductconstants.getnewproductSuccess: {
      state = {
        ...state,
        loading: false,
        product: action.payload.product,
      };
      break;
    }
    case getnewproductconstants.getnewproductfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
