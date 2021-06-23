import { Getblogconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  blog: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case Getblogconstants.Getblogrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case Getblogconstants.GetblogSuccess: {
      state = {
        ...state,
        loading: false,
        blog: action.payload.blog,
      };
      break;
    }
    case Getblogconstants.Getblogfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
