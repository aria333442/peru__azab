import { deleteshippingconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case deleteshippingconstants.deleteshippingrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case deleteshippingconstants.deleteshippingSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case deleteshippingconstants.deleteshippingfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
