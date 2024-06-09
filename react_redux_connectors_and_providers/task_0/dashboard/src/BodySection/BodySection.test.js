import React from 'react';
import { shallow } from 'enzyme';
import { BodySection } from './BodySection';

describe('<BodySection />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<BodySection title="Test Title">Test Children node</BodySection>);
    expect(wrapper.find('h2').text()).toEqual('Test Title');
    expect(wrapper.find('p').text()).toEqual('Test Children node');
  });
});