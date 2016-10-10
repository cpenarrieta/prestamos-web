import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import FinishQuote from '../components/FinishQuote';

class FinishQuoteViewContainer extends Component {
  render() {
    if (!this.props) {
      return null;
    }
    return <FinishQuote {...this.props} />;
  }
}

function mapStateToProps({quote}) {
  return {finishResults: quote.finishResults};
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

FinishQuoteViewContainer.propTypes = {
  onSubmit: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(FinishQuoteViewContainer);
