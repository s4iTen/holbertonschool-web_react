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
        expect(wrapper.contains(<Notifications />)).toEqual(true);
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
        expect(wrapper.contains(<CourseList />)).toEqual(false);
    });

    it('contains the Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Footer />)).toEqual(true);
    });

    describe('when isLoggedIn is true', () => {
        it('does not contain the Login component', () => {
            const wrapper = shallow(<App isLoggedIn={true} />);
            expect(wrapper.contains(<Login />)).toEqual(false);
        });

        it('contains the CourseList component', () => {
            const wrapper = shallow(<App isLoggedIn={true} />);
            expect(wrapper.contains(<CourseList />)).toEqual(true);
        });
    });
});