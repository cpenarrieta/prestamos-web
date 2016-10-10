import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import QuoteView from '../components/QuoteView';
import actions from "../actions/index.js";

function QuoteViewContainer(props) {
  return (
    <QuoteView {...props}/>
  );
}

function mapStateToProps({quote}) {
  return {...quote};
}

function mapDispatchToProps(dispatch) {
  return {
    updateQuote: (quote, hideSlider) => dispatch(actions.updateQuote(quote, hideSlider)),
    updateMoneda: (moneda) => dispatch(actions.updateMoneda(moneda)),
    updateCuotas: (cuotas) => dispatch(actions.updateCuotas(cuotas)),
    updateCuotasDobles: () => dispatch(actions.updateCuotasDobles()),
    updateShowSlider: () => dispatch(actions.updateShowSlider()),
    quoteSubmit: (request) => dispatch(actions.quoteSubmit(request)),
    finishQuote: (request) => dispatch(actions.finishQuote(request)),
  };
}

QuoteViewContainer.propTypes = {
  onSubmit: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteViewContainer);
