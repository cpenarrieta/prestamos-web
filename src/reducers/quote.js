import {
  UPDATE_AMOUNT,
  UPDATE_CURRENCY,
  UPDATE_SHOW_SLIDER,
  UPDATE_DOUBLE_QUOTES,
  UPDATE_TERM,
  START_QUOTE_SUBMIT,
  DONE_QUOTE_SUBMIT,
  START_FINISH_QUOTE,
  DONE_FINISH_QUOTE,
  USER_LOGOUT,
} from '../actions/synchronous/quote';

const initialState = {
  amountSelected: 50000,
  amounts: [5000, 10000, 20000, 30000, 50000, 100000, 150000, 200000, 250000, 300000],
  currency: "S/.",
  showSlider: false,
  doubleQuotes: false,
  term: 24,
  submitting: false,
  quotesResults: [],
  finishResults: null
};

function quote(state = initialState, action) {
  switch (action.type) {
    case UPDATE_AMOUNT: {
      return {...state, amountSelected: action.quote, showSlider: action.hideSlider ? false : true};
    }
    case UPDATE_CURRENCY: {
      return {...state, currency: action.currency};
    }
    case UPDATE_SHOW_SLIDER: {
      return {...state, showSlider: true};
    }
    case UPDATE_DOUBLE_QUOTES: {
      return {...state, doubleQuotes: !state.doubleQuotes};
    }
    case UPDATE_TERM: {
      return {...state, term: action.term};
    }
    case START_QUOTE_SUBMIT: {
      return {...state, submitting: true};
    }
    case DONE_QUOTE_SUBMIT: {
      return {...state, submitting: false, quotesResults: action.quotesResults};
    }
    case START_FINISH_QUOTE: {
      return {...state, submitting: true};
    }
    case DONE_FINISH_QUOTE: {
      return {...state, ...initialState, submitting: false, finishResults: action.result};
    }
    case USER_LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
}

export default quote;
