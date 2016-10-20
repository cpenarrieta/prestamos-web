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
    updateAmount: (quote, hideSlider) => dispatch(actions.updateAmount(quote, hideSlider)),
    updateCurrency: (currency) => dispatch(actions.updateCurrency(currency)),
    updateTerm: (term) => dispatch(actions.updateTerm(term)),
    updateDoubleQuotes: () => dispatch(actions.updateDoubleQuotes()),
    updateShowSlider: () => dispatch(actions.updateShowSlider()),
    quoteSubmit: (request) => dispatch(actions.quoteSubmit(request)),
    finishQuote: (request) => dispatch(actions.finishQuote(request)),
  };
}

QuoteViewContainer.propTypes = {
  onSubmit: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteViewContainer);
