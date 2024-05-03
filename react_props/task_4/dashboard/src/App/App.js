// App.js
import React from "react";
import PropTypes from 'prop-types';
import { Notifications } from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import "./App.css";

function App({ isLoggedIn = false }) {
  return (
    <>
      <Notifications />
      <div className="App-header">
        <Header />
      </div>
      <div className="App-body">
        {isLoggedIn ? <CourseList /> : <Login />}
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;