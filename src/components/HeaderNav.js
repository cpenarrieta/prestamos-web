import React, { PropTypes, Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

class HeaderNav extends Component {
  constructor(props) {
    super(props);
    this.state = {menuOpen: false};
  }

  handleTouchMenu = () => this.setState({menuOpen: !this.state.menuOpen});
  handleClose = () => this.setState({menuOpen: false});

  render() {
    const {isLogin} = this.props;
    const styles = {
      title: {
        cursor: 'pointer',
      },
    };
    let logOutComp = isLogin ? null : (<FlatButton label="Cerrar Sesion" onTouchTap={this.props.handleSignOut} />);
    let touchMenuMethod = isLogin ? (() => {}) : this.handleTouchMenu;

    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.state.menuOpen}
          onRequestChange={(menuOpen) => this.setState({menuOpen})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
        <AppBar
          title={<span style={styles.title}>Prestamos Web (necesitamos un nombre)</span>}
          iconElementLeft={<IconButton onTouchTap={touchMenuMethod}><NavigationMenu /></IconButton>}
          iconElementRight={logOutComp}
          onTitleTouchTap={this.props.handleTitleTouchTap}
        />
      </div>
    );
  }
}

HeaderNav.propTypes = {
  onSubmit: PropTypes.func,
};

export default HeaderNav;
