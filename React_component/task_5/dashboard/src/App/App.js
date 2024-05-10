import React from "react";
import PropTypes from "prop-types";
import { Notifications } from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import "./App.css";
import { BodySection } from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";

class App extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {},
  };

  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];
  listNotifications = [
    { id: 1, type: "default", value: "New course available", html: null },
    { id: 2, type: "urgent", value: "New resume available", html: null },
    { id: 3, type: "urgent", value: "New data available", html: null },
  ];

  componentDidMount() {
    document.addEventListener("keydown", this.handleLogout);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleLogout);
  }
  handleLogout = (event) => {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.props.logOut();
      event.preventDefault();
    }
  };
  render() {
    return (
      <>
        <Notifications
          displayDrawer
          listNotifications={this.listNotifications}
        />
        <div className="App-header">
          <Header />
        </div>
        <div className="App-body">
          {this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
