import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

function HeaderNav(props) {
  return (
    <AppBar title="Prestamos Web (necesitamos un nombre)"/>
  );
}

HeaderNav.propTypes = {
  onSubmit: PropTypes.func,
};

export default HeaderNav;
