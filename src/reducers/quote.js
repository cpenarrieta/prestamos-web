import {
  UPDATE_FIELD_DNI,
  UPDATE_FIELD_CELULAR,
  UPDATE_FIELD_EMAIL,
  UPDATE_QUOTE,
  UPDATE_MONEDA,
  UPDATE_SHOW_SLIDER,
  UPDATE_UBIGEO,
  UPDATE_FECHA_EMISION
} from '../actions/synchronous/quote';

const initialState = {
  dni: "",
  email: "",
  celular: "",
  ubigeo: "",
  fechaEmision: null,
  quoteSelected: 50000,
  quotes: [5000, 10000, 20000, 30000, 50000, 100000, 150000],
  moneda: "S/.",
  showSlider: false
};

function quote(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FIELD_DNI: {
      if (action.dni.length > 8) {
        action.dni = state.dni;
      }
      return {...state, dni: action.dni};
    }
    case UPDATE_UBIGEO: {
      if (action.ubigeo.length > 6) {
        action.ubigeo = state.ubigeo;
      }
      return {...state, ubigeo: action.ubigeo};
    }
    case UPDATE_FIELD_CELULAR: {
      if (action.celular.length > 9) {
        action.celular = state.celular;
      }
      return {...state, celular: action.celular};
    }
    case UPDATE_FIELD_EMAIL: {
      return {...state, email: action.email};
    }
    case UPDATE_FECHA_EMISION: {
      return {...state, fechaEmision: action.fechaEmision};
    }
    case UPDATE_QUOTE: {
      return {...state, quoteSelected: action.quote, showSlider: action.hideSlider ? false : true};
    }
    case UPDATE_MONEDA: {
      return {...state, moneda: action.moneda};
    }
    case UPDATE_SHOW_SLIDER: {
      return {...state, showSlider: true};
    }
    default:
      return state;
  }
}

export default quote;
