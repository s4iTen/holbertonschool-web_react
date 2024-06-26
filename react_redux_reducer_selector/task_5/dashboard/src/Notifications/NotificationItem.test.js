import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<NotificationItem />', () => {

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} markAsRead={jest.fn()} id={1} styles={{}} />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('renders with type and html props', () => {
    const wrapper = shallow(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} styles={{}} />);
    expect(wrapper.html()).toContain('data-notification-type="default"');
    expect(wrapper.html()).toContain('<u>test</u>');
  });

  it('renders with html prop', () => {
    const wrapper = shallow(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} styles={{}} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });

  it('renders correctly with type prop as urgent', () => {
    const wrapper = shallow(<NotificationItem type="urgent" html={{ __html: '<u>test</u>' }} styles={{}} />);
    expect(wrapper.html()).toContain('data-notification-type="urgent"');
  });

  it('renders correctly with value prop', () => {
    const wrapper = shallow(<NotificationItem type="default" value="Test value" markAsRead={jest.fn()} id={1} styles={{}} />);
    expect(wrapper.text()).toContain('Test value');
  });

  it('renders correctly without html prop', () => {
    const wrapper = shallow(<NotificationItem type="default" value="Test value" markAsRead={jest.fn()} id={1} styles={{}} />);
    expect(wrapper.html()).not.toContain('<u>test</u>');
  });


});
