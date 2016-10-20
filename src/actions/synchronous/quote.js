export const UPDATE_AMOUNT = 'quote/UPDATE_AMOUNT';
export const UPDATE_CURRENCY = 'quote/UPDATE_CURRENCY';
export const UPDATE_DOUBLE_QUOTES = 'quote/UPDATE_DOUBLE_QUOTES';
export const UPDATE_TERM = 'quote/UPDATE_TERM';
export const UPDATE_SHOW_SLIDER = 'quote/UPDATE_SHOW_SLIDER';
export const START_QUOTE_SUBMIT = 'quote/START_QUOTE_SUBMIT';
export const DONE_QUOTE_SUBMIT = 'quote/DONE_QUOTE_SUBMIT';
export const START_FINISH_QUOTE = 'quote/START_FINISH_QUOTE';
export const DONE_FINISH_QUOTE = 'quote/DONE_FINISH_QUOTE';
export const USER_LOGOUT = 'quote/USER_LOGOUT';

export function updateAmount(quote, hideSlider) {
  return { type: UPDATE_AMOUNT, quote, hideSlider };
}

export function updateCurrency(currency) {
  return { type: UPDATE_CURRENCY, currency };
}

export function updateShowSlider() {
  return { type: UPDATE_SHOW_SLIDER };
}

export function updateDoubleQuotes() {
  return { type: UPDATE_DOUBLE_QUOTES };
}

export function updateTerm(term) {
  return { type: UPDATE_TERM, term };
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
