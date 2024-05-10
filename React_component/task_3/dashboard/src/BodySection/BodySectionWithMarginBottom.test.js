import React from 'react';
import { shallow } from 'enzyme';
import { BodySection } from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('<BodySectionWithMarginBottom />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom />);
    expect(wrapper.find('BodySection').exists()).toEqual(true);
  });
});