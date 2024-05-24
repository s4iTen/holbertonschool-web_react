import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Login />);
    });

    it('renders without crashing', () => {
        expect(wrapper).not.toBeNull();
    });

    it('renders 2 input tags', () => {
        expect(wrapper.find('input').length).toEqual(2);
    });

    it('renders 2 label tags', () => {
        expect(wrapper.find('label').length).toEqual(2);
    });

    it('submit button is disabled by default', () => {
        const submitButton = wrapper.find('input[type="submit"]');
        expect(submitButton.prop('disabled')).toEqual(true);
    });

    it('submit button is enabled after changing input values', () => {
        const emailInput = wrapper.find('input[type="email"]');
        const passwordInput = wrapper.find('input[type="password"]');
        const submitButton = wrapper.find('input[type="submit"]');

        emailInput.simulate('change', { target: { value: 'test@test.com' } });
        passwordInput.simulate('change', { target: { value: 'password123' } });

        expect(submitButton.prop('disabled')).toEqual(false);
    });
});
