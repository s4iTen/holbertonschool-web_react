// task_2/dashboard/src/Login/Login.js

import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    margin: '50px',
  },
  input: {
    marginLeft: '20px',
    marginRight: '20px',
    display: 'block',
  },
  label: {
    display: 'block',
  },
  button: {
    display: 'block',
    marginTop: '20px',
  },
});

function Login({ logIn }) {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    enableSubmit: false
  });

  const handleChangeEmail = (event) => {
    const email = event.target.value;
    const password = loginData.password;
    const enableSubmit = email !== '' && password !== '';
    setLoginData({ ...loginData, email, enableSubmit });
  };

  const handleChangePassword = (event) => {
    const password = event.target.value;
    const email = loginData.email;
    const enableSubmit = email !== '' && password !== '';
    setLoginData({ ...loginData, password, enableSubmit });
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    logIn(loginData.email, loginData.password);
  };

  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email" className={css(styles.label)}>Email:</label>
        <input 
          type="email" 
          id="email" 
          className={css(styles.input)} 
          value={loginData.email} 
          onChange={handleChangeEmail} 
        />
        <label htmlFor="password" className={css(styles.label)}>Password:</label>
        <input 
          type="password" 
          id="password" 
          className={css(styles.input)} 
          value={loginData.password} 
          onChange={handleChangePassword} 
        />
        <input 
          type="submit" 
          value="OK" 
          className={css(styles.button)} 
          disabled={!loginData.enableSubmit} 
        />
      </form>
    </div>
  );
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
};

export default Login;
