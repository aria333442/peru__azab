import { changestatusconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case changestatusconstants.changestatusrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case changestatusconstants.changestatusSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case changestatusconstants.changestatusfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
