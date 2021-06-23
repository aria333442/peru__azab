import { getreportsconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  result: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case getreportsconstants.getreportsrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case getreportsconstants.getreportsSuccess: {
      state = {
        ...state,
        loading: false,
        result: action.payload.result,
      };
      break;
    }
    case getreportsconstants.getreportsfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
