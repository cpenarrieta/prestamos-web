import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

function LoginView({username, password, setUsername, setPassword, submitLogin, signin}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(username, password);
  }

  const handleOnChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" value={username} onChange={handleOnChangeUsername} />
      <label>Password:</label>
      <input type="password" value={password} onChange={handleOnChangePassword} />
      <RaisedButton type="submit" label="Login" />
    </form>
  );
}

LoginView.propTypes = {
  onSubmit: PropTypes.func,
};

export default LoginView;
