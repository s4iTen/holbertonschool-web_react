// task_2/dashboard/src/Header/Header.js

import React from "react";
import { StyleSheet, css } from 'aphrodite';
import holbimg from "../assets/holbimg.jpg";
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    color: '#e01d3f',
    fontSize: '20px',
    borderBottom: '3px solid #e01d3f',
  },
  img: {
    width: '200px',
  },
  welcome: {
    marginLeft: '20px',
    color: '#3a3a3a',
  },
  logout: {
    cursor: 'pointer',
    textDecoration: 'underline',
    color: '#e01d3f',
    marginLeft: '5px',
  },
});

class Header extends React.Component {
  static contextType = AppContext;

  handleLogout = () => {
    this.context.logOut();
  };

  render() {
    const { user } = this.context;

    return (
      <div className={css(styles.header)}>
        <img src={holbimg} className={css(styles.img)} alt="Holberton logo" />
        <h1>School dashboard</h1>
        {user.isLoggedIn && (
          <div className={css(styles.welcome)} id="logoutSection">
            Welcome {user.email} (<span className={css(styles.logout)} onClick={this.handleLogout}>logout</span>)
          </div>
        )}
      </div>
    );
  }
}

export default Header;
