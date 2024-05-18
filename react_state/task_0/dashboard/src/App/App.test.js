// Mock Aphrodite
jest.mock('aphrodite', () => ({
    StyleSheet: {
      create: jest.fn().mockImplementation(() => ({
        appBody: 'appBody',
        appFooter: 'appFooter',
      })),
    },
    css: jest.fn().mockImplementation(() => 'className'),
    StyleSheetTestUtils: {
      suppressStyleInjection: jest.fn(),
    },
  }));
  
  import { shallow } from "enzyme";
  import App from "./App";
  import React from 'react';
  import { Notifications } from "../Notifications/Notifications";
  import Login from "../Login/Login";
  import Header from "../Header/Header";
  import Footer from "../Footer/Footer";
  import CourseList from "../CourseList/CourseList";
  
  describe("<App />", () => {
      it("App renders without crashing", () => {
          const wrapper = shallow(<App />);
          expect(wrapper.exists()).toEqual(true);
      });
  
      it('contains the Notifications component', () => {
          const wrapper = shallow(<App />);
          expect(wrapper.find('Notifications').exists()).toEqual(true);
      });
  
      it('contains the Header component', () => {
          const wrapper = shallow(<App />);
          expect(wrapper.contains(<Header />)).toEqual(true);
      });
  
      it('contains the Login component', () => {
          const wrapper = shallow(<App />);
          expect(wrapper.contains(<Login />)).toEqual(true);
      });
  
      it('does not contain the CourseList component', () => {
          const wrapper = shallow(<App />);
          expect(wrapper.contains(<CourseList listCourses={[]} />)).toEqual(false);
      });
  
      it('contains the Footer component', () => {
          const wrapper = shallow(<App />);
          expect(wrapper.contains(<Footer />)).toEqual(true);
      });
  
      it('calls logOut and alert when ctrl+h is pressed', () => {
          const logOutFunction = jest.fn();
          const wrapper = shallow(<App logOut={logOutFunction} />);
          global.alert = jest.fn();
  
          const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
          document.dispatchEvent(event);
  
          expect(logOutFunction).toHaveBeenCalled();
          expect(global.alert).toHaveBeenCalledWith('Logging you out');
      });
  
      describe('when isLoggedIn is true', () => {
          it('does not contain the Login component', () => {
              const wrapper = shallow(<App isLoggedIn={true} />);
              expect(wrapper.contains(<Login />)).toEqual(false);
          });
  
          it('contains the CourseList component', () => {
              const wrapper = shallow(<App isLoggedIn={true} />);
              expect(wrapper.find(CourseList).exists()).toEqual(true);
          });
      });
  
      it('has displayDrawer state default to false', () => {
          const wrapper = shallow(<App />);
          expect(wrapper.state('displayDrawer')).toEqual(false);
      });
  
      it('handleDisplayDrawer sets displayDrawer to true', () => {
          const wrapper = shallow(<App />);
          wrapper.instance().handleDisplayDrawer();
          expect(wrapper.state('displayDrawer')).toEqual(true);
      });
  
      it('handleHideDrawer sets displayDrawer to false', () => {
          const wrapper = shallow(<App />);
          wrapper.instance().handleDisplayDrawer(); // first set it to true
          wrapper.instance().handleHideDrawer();
          expect(wrapper.state('displayDrawer')).toEqual(false);
      });
  });
  