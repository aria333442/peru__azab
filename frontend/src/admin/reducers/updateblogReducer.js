import { updateblogconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case updateblogconstants.updateblogrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case updateblogconstants.updateblogSuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case updateblogconstants.updateblogfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
