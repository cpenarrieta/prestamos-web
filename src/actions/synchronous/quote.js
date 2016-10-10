export const UPDATE_QUOTE = 'quote/UPDATE_QUOTE';
export const UPDATE_MONEDA = 'quote/UPDATE_MONEDA';
export const UPDATE_CUOTAS_DOBLES = 'quote/UPDATE_CUOTAS_DOBLES';
export const UPDATE_CUOTAS = 'quote/UPDATE_CUOTAS';
export const UPDATE_SHOW_SLIDER = 'quote/UPDATE_SHOW_SLIDER';
export const START_QUOTE_SUBMIT = 'quote/START_QUOTE_SUBMIT';
export const DONE_QUOTE_SUBMIT = 'quote/DONE_QUOTE_SUBMIT';
export const START_FINISH_QUOTE = 'quote/START_FINISH_QUOTE';
export const DONE_FINISH_QUOTE = 'quote/DONE_FINISH_QUOTE';
export const USER_LOGOUT = 'quote/USER_LOGOUT';

export function updateQuote(quote, hideSlider) {
  return { type: UPDATE_QUOTE, quote, hideSlider };
}

export function updateMoneda(moneda) {
  return { type: UPDATE_MONEDA, moneda };
}

export function updateShowSlider() {
  return { type: UPDATE_SHOW_SLIDER };
}

export function updateCuotasDobles() {
  return { type: UPDATE_CUOTAS_DOBLES };
}

export function updateCuotas(cuotas) {
  return { type: UPDATE_CUOTAS, cuotas };
}

export function startQuoteSubmit() {
  return { type: START_QUOTE_SUBMIT };
}

export function doneQuoteSubmit(quotesResults) {
  return { type: DONE_QUOTE_SUBMIT, quotesResults };
}

export function startFinishQuote() {
  return { type: START_FINISH_QUOTE };
}

export function doneFinishQuote(result) {
  return { type: DONE_FINISH_QUOTE, result };
}

export function userLogOut() {
  return { type: USER_LOGOUT };
}
