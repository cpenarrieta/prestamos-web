export const SUBMIT_LOGIN = 'auth/SUBMIT_LOGIN';
export const RECEIVE_USER = 'auth/RECEIVE_USER';
export const AUTH_ERROR = 'auth/AUTH_ERROR';
export const UPDATE_FIELD_DNI = 'auth/UPDATE_FIELD_DNI';
export const UPDATE_FIELD_CELULAR = 'auth/UPDATE_FIELD_CELULAR';
export const UPDATE_FIELD_EMAIL = 'auth/UPDATE_FIELD_EMAIL';
export const UPDATE_UBIGEO = 'auth/UPDATE_UBIGEO';
export const UPDATE_FECHA_EMISION = 'auth/UPDATE_FECHA_EMISION';
export const UPDATE_FECHA_NACIMIENTO = 'auth/UPDATE_FECHA_NACIMIENTO';
export const UPDATE_APELLIDOS = 'auth/UPDATE_APELLIDOS';
export const UPDATE_NOMBRE = 'auth/UPDATE_NOMBRE';

export function submitLogin() {
  return { type: SUBMIT_LOGIN };
}

export function receiveUser(user) {
  return { type: RECEIVE_USER, user };
}

export function authError(status, error) {
  return { type: AUTH_ERROR, status, error };
}

export function updateDni(dni) {
  return { type: UPDATE_FIELD_DNI, dni };
}

export function updateCelular(celular) {
  return { type: UPDATE_FIELD_CELULAR, celular };
}

export function updateEmail(email) {
  return { type: UPDATE_FIELD_EMAIL, email };
}

export function updateUbigeo(ubigeo) {
  return { type: UPDATE_UBIGEO, ubigeo };
}

export function updateFechaEmision(fechaEmision) {
  return { type: UPDATE_FECHA_EMISION, fechaEmision };
}

export function updateFechaNacimiento(fechaNacimiento) {
  return { type: UPDATE_FECHA_NACIMIENTO, fechaNacimiento };
}

export function updateApellidos(apellidos) {
  return { type: UPDATE_APELLIDOS, apellidos };
}

export function updateNombre(nombre) {
  return { type: UPDATE_NOMBRE, nombre };
}
