import { getusersconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  newV: "",
  returning: "",
  users: "",
  allvisitors: "",
  alluser: "",
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case getusersconstants.getusersrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case getusersconstants.getusersSuccess: {
      state = {
        ...state,
        loading: false,
        newV: action.payload.newV,
        returning: action.payload.returning,
        users: action.payload.users,
        allvisitors: action.payload.allvisitors,
        alluser: action.payload.alluser,
      };
      break;
    }
    case getusersconstants.getusersfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
