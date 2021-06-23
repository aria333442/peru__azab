import { deleteproductconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case deleteproductconstants.deleteproductrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case deleteproductconstants.deleteproductSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case deleteproductconstants.deleteproductfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
