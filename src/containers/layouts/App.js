import React, { Component, PropTypes } from 'react';
import HeaderNavContainer from '../../containers/HeaderNavContainer';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="app">
        <HeaderNavContainer />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  onSubmit: PropTypes.func,
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
