import { getproductinfoconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  Muebles: "",
  Decoración: "",
  Mascotas: "",
  Niños: "",
  allproducts: "",
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case getproductinfoconstants.getproductinforequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case getproductinfoconstants.getproductinfoSuccess: {
      state = {
        ...state,
        loading: false,
        Muebles: action.payload.Muebles,
        Decoración: action.payload.Decoración,
        Mascotas: action.payload.Mascotas,
        Niños: action.payload.Niños,
        allproducts: action.payload.allproducts,
      };
      break;
    }
    case getproductinfoconstants.getproductinfofailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
