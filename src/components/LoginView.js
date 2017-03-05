import React, { PropTypes, Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

const getDialog = (open, handleClose, text, image) => {
  const actions = [
    <FlatButton
      label="ok"
      primary={true}
      onTouchTap={handleClose}
    />
  ];

  return (
    <Dialog
      actions={actions}
      modal={false}
      open={open}
      onRequestClose={handleClose}
      autoScrollBodyContent={true}
      contentStyle={{width: "400px"}}
    >
      <h3>{text}</h3>
      <img src={image} alt="dni" height="200px" />
    </Dialog>
  );
}

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {dniDialogOpen: false, ubigeoDialogOpen: false, fechaEmisionDialogOpen: false};
  }

  handleChangeDni = (e) => this.props.updateDni(e.target.value);
  handleChangeEmail = (e) => this.props.updateEmail(e.target.value);
  handleChangeCelular = (e) =>   this.props.updateCelular(e.target.value);
  handleChangeUbigeo = (e) => this.props.updateUbigeo(e.target.value);
  handleFechaEmision = (e, value) =>   this.props.updateFechaEmision(value);
  handleFechaNacimiento = (e, value) => this.props.updateFechaNacimiento(value);
  handleChangeApellidos = (e) => this.props.updateApellidos(e.target.value);
  handleChangeNombre = (e) => this.props.updateNombre(e.target.value);
  handleOpenDniDialog = () => this.setState({dniDialogOpen: !this.state.dniDialogOpen});
  handleCloseDniDialog = () => this.setState({dniDialogOpen: false});
  handleOpenUbigeoDialog = () => this.setState({ubigeoDialogOpen: !this.state.ubigeoDialogOpen});
  handleCloseUbigeoDialog = () => this.setState({ubigeoDialogOpen: false});
  handleOpenFechaEmisionDialog = () => this.setState({fechaEmisionDialogOpen: !this.state.fechaEmisionDialogOpen});
  handleCloseFechaEmisionDialog = () => this.setState({fechaEmisionDialogOpen: false});
  handleLogin = (e) => {
    const {dni, nombre, email, celular, ubigeo, fechaEmision, fechaNacimiento, apellidos, validateLogin} = this.props;
    validateLogin({dni, apellidos, nombre, fechaNacimiento, ubigeo, fechaEmision, email, celular});
  }

  render() {
    const {
      dni, nombre, email, celular, ubigeo, fechaEmision, fechaNacimiento, apellidos,
      dniError, ubigeoError, celularError, emailError, apellidosError, nombreError,
      submitting, signin
    } = this.props;

    if (submitting) {
      signin({dni, apellidos, nombre, fechaNacimiento, ubigeo, fechaEmision, email, celular});
    }

    return (
      <div className="login">
        <Paper zDepth={2} rounded={false} className="login-paper" >
          <h2 className="login-paper-item">IDENTIFICACIÓN DEL USUARIO</h2>
          <div className="login-paper-item login-paper-row">
            <i className="material-icons login-icon clicable" onTouchTap={this.handleOpenDniDialog}>featured_video</i>
            <TextField
              id="dni-id"
              hintText="Ingrese su DNI"
              floatingLabelText="DNI"
              type="number"
              value={dni}
              onChange={this.handleChangeDni}
              errorText={dniError}
            />
            <i className="material-icons login-icon clicable" onTouchTap={this.handleOpenFechaEmisionDialog}>event</i>
            <DatePicker id="emission-date-id" className="" floatingLabelText="Fecha de Emisión de su Dni" hintText="Fecha de Emisión de Dni" value={fechaEmision} onChange={this.handleFechaEmision} />
          </div>
          <div className="login-paper-item login-paper-row">
            <i className="material-icons login-icon">person</i>
            <TextField
              id="name-id"
              hintText="Ingrese su Nombre"
              floatingLabelText="Nombre"
              type="text"
              value={nombre}
              onChange={this.handleChangeNombre}
              errorText={nombreError}
            />
            <i className="material-icons login-icon">person</i>
            <TextField
              id="last-name-id"
              hintText="Ingrese sus Apellidos"
              floatingLabelText="Apellidos"
              type="text"
              value={apellidos}
              onChange={this.handleChangeApellidos}
              errorText={apellidosError}
            />
          </div>
          <div className="login-paper-item login-paper-row">
            <i className="material-icons login-icon">event</i>
            <DatePicker id="birthdate-id" className="" floatingLabelText="Fecha de Nacimiento" hintText="Fecha de Nacimiento" value={fechaNacimiento} onChange={this.handleFechaNacimiento} />
            <i className="material-icons login-icon clicable" onTouchTap={this.handleOpenUbigeoDialog}>location_on</i>
            <TextField
              id="ubigeo-id"
              hintText="Ingrese Ubigeo ubicado en su Dni"
              floatingLabelText="Ubigeo"
              type="number"
              value={ubigeo}
              onChange={this.handleChangeUbigeo}
              errorText={ubigeoError}
            />
          </div>
          <div className="login-paper-item login-paper-row">
            <i className="material-icons login-icon">email</i>
            <TextField
              id="email-id"
              hintText="Ingrese su email"
              floatingLabelText="Email"
              value={email}
              onChange={this.handleChangeEmail}
              errorText={emailError}
            />
            <i className="material-icons login-icon">phone</i>
            <TextField
              id="celphone-id"
              hintText="Ingrese su celular"
              floatingLabelText="Celular"
              className="login-paper-item"
              type="number"
              value={celular}
              onChange={this.handleChangeCelular}
              errorText={celularError}
            />
          </div>
          <div className="login-paper-item login-paper-row">
          </div>
          <RaisedButton
            id="register-btn-id"
            label="Ingresar"
            primary={true}
            className="login-paper-item btn-login"
            onTouchTap={this.handleLogin}
          />
        </Paper>
        {getDialog(this.state.dniDialogOpen, this.handleCloseDniDialog, "DNI", "dni.png")}
        {getDialog(this.state.ubigeoDialogOpen, this.handleCloseUbigeoDialog, "Ubigeo", "ubigeo.png")}
        {getDialog(this.state.fechaEmisionDialogOpen, this.handleCloseFechaEmisionDialog, "Fecha de Emisión", "fecha_emision.png")}
      </div>
    );
  }
}

LoginView.propTypes = {
  onSubmit: PropTypes.func,
};

export default LoginView;
