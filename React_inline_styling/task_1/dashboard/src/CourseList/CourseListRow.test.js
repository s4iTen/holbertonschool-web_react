// CourseList/CourseListRow.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  it('renders one cell with colspan = 2 when isHeader is true and textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First cell" />);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toEqual('2');
  });

  it('renders two cells when isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First cell" textSecondCell="Second cell" />);
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('renders correctly two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First cell" textSecondCell="Second cell" />);
    expect(wrapper.find('td')).toHaveLength(2);
  });
  it('applies the correct style when isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First cell" />);
    expect(wrapper.find('tr').prop('style')).toEqual({ backgroundColor: '#deb5b545' });
  });

  it('applies the correct style when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First cell" />);
    expect(wrapper.find('tr').prop('style')).toEqual({ backgroundColor: '#f5f5f5ab' });
  });
});