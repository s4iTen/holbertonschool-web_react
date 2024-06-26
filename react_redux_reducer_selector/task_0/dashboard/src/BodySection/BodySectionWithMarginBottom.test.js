jest.mock('aphrodite', () => ({
  StyleSheet: {
    create: jest.fn(() => ({
      bodySectionWithMargin: { marginBottom: '40px' },
    })),
  },
  css: jest.fn().mockImplementation(() => 'className'),
  StyleSheetTestUtils: {
    suppressStyleInjection: jest.fn(),
  },
}));

import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('<BodySectionWithMarginBottom />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom />);
    expect(wrapper.find('BodySection').exists()).toEqual(true);
  });
});