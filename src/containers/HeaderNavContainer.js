import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import HeaderNav from '../components/HeaderNav';
import Cookies from 'js-cookie';
import { browserHistory } from 'react-router';
import actions from '../actions';

class HeaderNavContainer extends Component {
  handleSignOut = (e) => {
    e.preventDefault();
    Cookies.remove('auth');
    this.props.receiveUser({});
    this.props.userLogOut();
    browserHistory.push('/login');
  }

  handleTitleTouchTap = (e) => {
    e.preventDefault();
    browserHistory.push('/');
  }

  render() {
    return <HeaderNav {...this.props} handleSignOut={this.handleSignOut} handleTitleTouchTap={this.handleTitleTouchTap} />;
  }
}

function mapStateToProps({headerNav}) {
  return headerNav;
}

function mapDispatchToProps(dispatch) {
  return {
    receiveUser: (user) => dispatch(actions.receiveUser(user)),
    userLogOut: () => dispatch(actions.userLogOut()),
  };
}

HeaderNavContainer.propTypes = {
  onSubmit: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavContainer);
