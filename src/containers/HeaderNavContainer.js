import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import HeaderNav from '../components/HeaderNav';

class HeaderNavContainer extends Component {
  render() {
    return <HeaderNav {...this.props} />;
  }
}

function mapStateToProps({headerNav}) {
  return headerNav;
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

HeaderNavContainer.propTypes = {
  onSubmit: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavContainer);
