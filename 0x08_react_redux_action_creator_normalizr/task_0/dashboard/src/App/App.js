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
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available', html: null },
        { id: 2, type: 'urgent', value: 'New resume available', html: null },
        { id: 3, type: 'urgent', value: 'New data available', html: null },
      ],
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

  markNotificationAsRead = (id) => {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter(
        (notification) => notification.id !== id
      ),
    }));
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleLogout);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleLogout);
  }

  handleLogout = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.logOut();
      event.preventDefault();
    }
  };

  render() {
    const { user, listNotifications } = this.state;
    const value = { user, logOut: this.logOut };

    return (
      <AppContext.Provider value={value}>
        <>
          <Notifications
            displayDrawer={this.state.displayDrawer}
            listNotifications={listNotifications}
            markNotificationAsRead={this.markNotificationAsRead}
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
                  <Login logIn={this.logIn} />
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
