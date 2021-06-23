import { orderbydateconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  order: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case orderbydateconstants.orderbydaterequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case orderbydateconstants.orderbydateSuccess: {
      state = {
        ...state,
        loading: false,
        order: action.payload.order,
      };
      break;
    }
    case orderbydateconstants.orderbydatefailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
