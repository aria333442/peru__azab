import { tableconstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  final: [],
  finale: "",
  Pendiente: "",
  Proceso: "",
  Enviado: "",
  Entregado: "",
  Pagado: "",
  canceladas: "",
  allorders: "",
  activeorders: "",
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case tableconstants.tablerequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case tableconstants.tableSuccess: {
      state = {
        ...state,
        loading: false,
        final: action.payload.final,
        finale: action.payload.finale,
        Pendiente: action.payload.Pendiente,
        Proceso: action.payload.Proceso,
        Enviado: action.payload.Enviado,
        Entregado: action.payload.Entregado,
        Pagado: action.payload.Pagado,
        canceladas: action.payload.canceladas,
        allorders: action.payload.allorders,
        activeorders: action.payload.activeorders,
      };
      break;
    }
    case tableconstants.tablefailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
