import React from "react";
import { StyleSheet, css } from 'aphrodite';
import holbimg from "../assets/holbimg.jpg";

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
});

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={holbimg} className={css(styles.img)} />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;