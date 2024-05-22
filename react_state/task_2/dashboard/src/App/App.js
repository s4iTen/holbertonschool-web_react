// task_2/dashboard/src/App/App.js

import React from 'react';
import { Notifications } from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheet, css } from 'aphrodite';
import { BodySection } from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import AppContext from './AppContext';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid red',
  },
  headerImg: {
    width: '15%',
    height: '15%',
    marginRight: '10px',
  },
  headerH1: {
    color: 'crimson',
    position: 'relative',
    marginTop: '10px',
    fontFamily: 'sans-serif',
  },
  body: {
    fontFamily: 'sans-serif',
    marginTop: '50px',
    marginLeft: '30px',
  },
  footer: {
    fontFamily: 'sans-serif',
    fontStyle: 'italic',
    textAlign: 'center',
    position: 'absolute',
    bottom: '0',
    width: '100%',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logIn: this.logIn,
      logOut: this.logOut,
    };
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  };

  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
    console.log('User logged out');
  };

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  listNotifications = [
    { id: 1, type: 'default', value: 'New course available', html: null },
    { id: 2, type: 'urgent', value: 'New resume available', html: null },
    { id: 3, type: 'urgent', value: 'New data available', html: null },
  ];

  componentDidMount() {
    document.addEventListener('keydown', this.handleLogout);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleLogout);
  }

  handleLogout = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.state.logOut();
      event.preventDefault();
    }
  };

  render() {
    const { user, logIn, logOut } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut }}>
        <>
          <Notifications
            displayDrawer={this.state.displayDrawer}
            listNotifications={this.listNotifications}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <div className={css(styles.body)}>
            <Header />
            <div className="App-body">
              {user.isLoggedIn ? (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={this.listCourses} />
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title="Log in to continue">
                  <Login logIn={logIn} />
                </BodySectionWithMarginBottom>
              )}
            </div>
            <div className={css(styles.footer)}>
              <Footer />
            </div>
          </div>
        </>
      </AppContext.Provider>
    );
  }
}

export default App;
