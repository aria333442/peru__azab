import { editshippingconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case editshippingconstants.editshippingrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case editshippingconstants.editshippingSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case editshippingconstants.editshippingfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
