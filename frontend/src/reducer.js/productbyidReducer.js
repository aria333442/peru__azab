import { Productbyidsconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  product: {
    name: "",
    rating: "",
    productImage: [
      {
        img: "",
      },
    ],
    saleprice: "",
    actualPrice: "",
    lesspercentage: "",
    description: "",
    comboname: [
      {
        name1: "",
        name2: "",
      },
    ],
    comboimages: [
      {
        image1: "",
        image2: "",
      },
    ],
    benefits: "",
    reviews: [
      {
        heading: "",
        Review: "",
        rating: "",
      },
    ],
    category: {},
    subcategory: {},
    colors: [
      {
        color: "",
      },
    ],
    color: "",
  },
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case Productbyidsconstants.Productbyidsrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case Productbyidsconstants.ProductbyidsSuccess: {
      state = {
        ...state,
        loading: false,
        product: action.payload.product,
      };
      break;
    }
    case Productbyidsconstants.Productbyidsfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
