import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import BankLogin from '../components/BankLogin';

class BankLoginContainer extends Component {
  render() {
    if (!this.props) {
      return null;
    }
    return <BankLogin {...this.props} />;
  }
}

function mapStateToProps({auth}) {
  return {...auth};
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

BankLoginContainer.propTypes = {
  onSubmit: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(BankLoginContainer);
