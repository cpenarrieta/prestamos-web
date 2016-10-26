import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import QuoteView from '../components/QuoteView';
import actions from "../actions/index.js";

class QuoteViewContainer extends Component {
  componentDidUpdate() {
    const { reloadData, quoteSubmit, currency, amountSelected, doubleQuotes, term } = this.props;
    if (reloadData) {
      quoteSubmit({ currency, amountSelected, term, doubleQuotes });
    }
  }

  render() {
    return (
      <QuoteView {...this.props}/>
    );
  }
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
    doReloadData: () => dispatch(actions.doReloadData()),
  };
}

QuoteViewContainer.propTypes = {
  onSubmit: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteViewContainer);
