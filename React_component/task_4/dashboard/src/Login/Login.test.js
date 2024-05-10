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
});