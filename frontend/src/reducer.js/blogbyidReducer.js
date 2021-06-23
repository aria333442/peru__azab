import { Getblogbyidconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  blog: {
    aurthor: "",
    authorImage: "",
    blogImage: "",
    description: "",
    date: "",
    title: "",
    comments: [
      {
        name: "",
        comment: "",
        date: "",
      },
    ],
    tags: [
      {
        tag: "",
      },
    ],
    blogcategory: "",
  },
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case Getblogbyidconstants.Getblogbyidrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case Getblogbyidconstants.GetblogbyidSuccess: {
      state = {
        ...state,
        loading: false,
        blog: action.payload.blog,
      };
      break;
    }
    case Getblogbyidconstants.Getblogbyidfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
