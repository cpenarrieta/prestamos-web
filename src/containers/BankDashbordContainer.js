import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import BankDashbord from '../components/BankDashbord';

class BankDashbordContainer extends Component {
  render() {
    if (!this.props) {
      return null;
    }
    return <BankDashbord {...this.props} />;
  }
}

function mapStateToProps({bankDashboard}) {
  return {...bankDashboard};
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

BankDashbordContainer.propTypes = {
  onSubmit: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(BankDashbordContainer);
