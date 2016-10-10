import {
  UPDATE_QUOTE,
  UPDATE_MONEDA,
  UPDATE_SHOW_SLIDER,
  UPDATE_CUOTAS_DOBLES,
  UPDATE_CUOTAS,
  START_QUOTE_SUBMIT,
  DONE_QUOTE_SUBMIT,
  START_FINISH_QUOTE,
  DONE_FINISH_QUOTE,
  USER_LOGOUT,
} from '../actions/synchronous/quote';

const initialState = {
  quoteSelected: 50000,
  quotes: [5000, 10000, 20000, 30000, 50000, 100000, 150000],
  moneda: "S/.",
  showSlider: false,
  cuotasDobles: false,
  cuotas: 24,
  submitting: false,
  quotesResults: [],
  finishResults: null
};

function quote(state = initialState, action) {
  switch (action.type) {
    case UPDATE_QUOTE: {
      return {...state, quoteSelected: action.quote, showSlider: action.hideSlider ? false : true};
    }
    case UPDATE_MONEDA: {
      return {...state, moneda: action.moneda};
    }
    case UPDATE_SHOW_SLIDER: {
      return {...state, showSlider: true};
    }
    case UPDATE_CUOTAS_DOBLES: {
      return {...state, cuotasDobles: !state.cuotasDobles};
    }
    case UPDATE_CUOTAS: {
      return {...state, cuotas: action.cuotas};
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
      return {...state, submitting: false, finishResults: action.result};
    }
    case USER_LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
}

export default quote;
