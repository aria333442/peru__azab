import { getshippingconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  ship: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case getshippingconstants.getshippingrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case getshippingconstants.getshippingSuccess: {
      state = {
        ...state,
        loading: false,
        ship: action.payload.ship,
      };
      break;
    }
    case getshippingconstants.getshippingfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
