import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('renders with type and html props', () => {
    const wrapper = shallow(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toContain('data-notification-type="default"');
    expect(wrapper.html()).toContain('<u>test</u>');
  });

  it('renders with html prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });
});