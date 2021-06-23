import { GetProductsconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  products: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case GetProductsconstants.GetProductsrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case GetProductsconstants.GetProductsSuccess: {
      state = {
        ...state,
        loading: false,
        products: action.payload.products,
      };
      break;
    }
    case GetProductsconstants.GetProductsfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
