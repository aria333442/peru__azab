import { Cartbyidconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  item: {
    user: "",
    cartItems: [],
  },
  total: "",
  category: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case Cartbyidconstants.Cartbyidrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case Cartbyidconstants.CartbyidSuccess: {
      state = {
        ...state,
        loading: false,
        item: action.payload.item,
        total: action.payload.total,
        category: action.payload.category,
      };
      break;
    }
    case Cartbyidconstants.Cartbyidfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
