import React from "react";
import PropTypes from 'prop-types';
import { Notifications } from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import "./App.css";

class App extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
  };

  static defaultProps = {
    isLoggedIn: false,
  };

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  render() {
    return (
      <>
        <Notifications />
        <div className="App-header">
          <Header />
        </div>
        <div className="App-body">
          {this.props.isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login />}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </>
    );
  }
}

export default App;