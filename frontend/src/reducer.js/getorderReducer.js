import { Getorderconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  orders: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case Getorderconstants.Getorderrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case Getorderconstants.GetorderSuccess: {
      state = {
        ...state,
        loading: false,
        orders: action.payload.orders,
      };
      break;
    }
    case Getorderconstants.Getorderfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
