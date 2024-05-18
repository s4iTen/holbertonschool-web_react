import React from "react";
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

function Login() {
  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email" className={css(styles.label)}>Email:</label>
      <input type="email" id="email" className={css(styles.input)} />
      <label htmlFor="password" className={css(styles.label)}>Password:</label>
      <input type="password" id="password" className={css(styles.input)} />
      <button className={css(styles.button)}>OK</button>
    </div>
  );
}

export default Login;