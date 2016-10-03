export const UPDATE_FIELD_DNI = 'quote/UPDATE_FIELD_DNI';
export const UPDATE_FIELD_CELULAR = 'quote/UPDATE_FIELD_CELULAR';
export const UPDATE_FIELD_EMAIL = 'quote/UPDATE_FIELD_EMAIL';
export const UPDATE_QUOTE = 'quote/UPDATE_QUOTE';
export const UPDATE_MONEDA = 'quote/UPDATE_MONEDA';
export const UPDATE_SHOW_SLIDER = 'quote/UPDATE_SHOW_SLIDER';
export const UPDATE_UBIGEO = 'quote/UPDATE_UBIGEO';
export const UPDATE_FECHA_EMISION = 'quote/UPDATE_FECHA_EMISION';


export function updateDni(dni) {
  return { type: UPDATE_FIELD_DNI, dni };
}

export function updateCelular(celular) {
  return { type: UPDATE_FIELD_CELULAR, celular };
}

export function updateEmail(email) {
  return { type: UPDATE_FIELD_EMAIL, email };
}

export function updateQuote(quote, hideSlider) {
  return { type: UPDATE_QUOTE, quote, hideSlider };
}

export function updateMoneda(moneda) {
  return { type: UPDATE_MONEDA, moneda };
}

export function updateShowSlider() {
  return { type: UPDATE_SHOW_SLIDER };
}

export function updateUbigeo(ubigeo) {
  return { type: UPDATE_UBIGEO, ubigeo };
}

export function updateFechaEmision(fechaEmision) {
  return { type: UPDATE_FECHA_EMISION, fechaEmision };
}
