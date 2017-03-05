import {
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
  VALIDATE_LOGIN,
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
  submitting: false,
  dniError: "",
  ubigeoError: "",
  celularError: "",
  emailError: "",
  apellidosError: "",
  nombreError: ""
}

function validateEmail(email) {
  // eslint-disable-next-line
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function auth(state = initialState, action) {
  switch (action.type) {
    case VALIDATE_LOGIN: {
      const {dni, nombre, email, celular, ubigeo, apellidos} = action.user;
      let dniError = "";
      let ubigeoError = "";
      let celularError = "";
      let emailError = "";
      let apellidosError = "";
      let nombreError = "";
      let validationErrors = false;

      if (dni === "") {
        validationErrors = true;
        dniError += "Empty DNI";
      }
      if (nombre === "") {
        validationErrors = true;
        nombreError += "Empty nombre";
      }
      if (email === "") {
        validationErrors = true;
        emailError += "Empty email";
      }
      if (celular === "") {
        validationErrors = true;
        celularError += "Empty celular";
      }
      if (ubigeo === "") {
        validationErrors = true;
        ubigeoError += "Empty ubigeo";
      }
      if (apellidos === "") {
        validationErrors = true;
        apellidosError += "Empty apellidos";
      }

      return Object.assign({}, state, { dniError, ubigeoError, nombreError, emailError, celularError, apellidosError, submitting: !validationErrors });
    }
    case RECEIVE_USER: {
      return Object.assign({}, state, initialState, {currentUser: action.user, submitting: false});
    }
    case AUTH_ERROR: {
      return Object.assign({}, state, {submitting: false});
    }
    case UPDATE_FIELD_DNI: {
      let dniError = "";
      if (action.dni.length > 8) {
        action.dni = state.dni;
      } else if (action.dni === "") {
        dniError = "Empty DNI";
      }
      return {...state, dni: action.dni, dniError};
    }
    case UPDATE_UBIGEO: {
      let ubigeoError = "";
      if (action.ubigeo.length > 6) {
        action.ubigeo = state.ubigeo;
      } else if (action.ubigeo === "") {
        ubigeoError = "Empty ubigeo";
      }
      return {...state, ubigeo: action.ubigeo, ubigeoError};
    }
    case UPDATE_FIELD_CELULAR: {
      let celularError = "";
      if (action.celular.length > 9) {
        action.celular = state.celular;
      } else if (action.celular === "") {
        celularError = "Empty celular";
      }
      return {...state, celular: action.celular, celularError};
    }
    case UPDATE_FIELD_EMAIL: {
      let emailError = "";
      if (action.email === "") {
        emailError = "Empty email";
      } else if (!validateEmail(action.email)) {
        emailError = "Invalid email format";
      }
      return {...state, email: action.email, emailError};
    }
    case UPDATE_FECHA_EMISION: {
      return {...state, fechaEmision: action.fechaEmision};
    }
    case UPDATE_FECHA_NACIMIENTO: {
      return {...state, fechaNacimiento: action.fechaNacimiento};
    }
    case UPDATE_APELLIDOS: {
      let apellidosError = "";
      if (action.apellidos === "") {
        apellidosError = "Empty apellidos";
      }
      return {...state, apellidos: action.apellidos, apellidosError};
    }
    case UPDATE_NOMBRE: {
      let nombreError = "";
      if (action.nombre === "") {
        nombreError = "Empty nombre";
      }
      return {...state, nombre: action.nombre, nombreError};
    }
    default:
      return state;
  }
}

export default auth;
