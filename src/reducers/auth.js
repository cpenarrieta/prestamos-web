import {
  SUBMIT_LOGIN,
  RECEIVE_USER,
  AUTH_ERROR,
  UPDATE_FIELD_DNI,
  UPDATE_FIELD_CELULAR,
  UPDATE_FIELD_EMAIL,
  UPDATE_UBIGEO,
  UPDATE_FECHA_EMISION,
  UPDATE_FECHA_NACIMIENTO,
  UPDATE_APELLIDOS,
  UPDATE_NOMBRE,
} from '../actions/synchronous/auth';

const initialState = {
  token: null,
  dni: "",
  email: "",
  celular: "",
  ubigeo: "",
  apellidos: "",
  nombre: "",
  fechaEmision: null,
  fechaNacimiento: null,
  currentUser: {},
  submitting: false
}

function auth(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      return Object.assign({}, state, { submitting: true });
    }
    case RECEIVE_USER: {
      return Object.assign({}, state, initialState, {currentUser: action.user});
    }
    case AUTH_ERROR: {
      return Object.assign({}, state, {submitting: false});
    }
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
    case UPDATE_FECHA_NACIMIENTO: {
      return {...state, fechaNacimiento: action.fechaNacimiento};
    }
    case UPDATE_APELLIDOS: {
      return {...state, apellidos: action.apellidos};
    }
    case UPDATE_NOMBRE: {
      return {...state, nombre: action.nombre};
    }
    default:
      return state;
  }
}

export default auth;
