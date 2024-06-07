// CourseList.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<CourseList />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct number of rows when listCourses is empty', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(3); // 2 headers + 1 no-course row
    expect(wrapper.find(CourseListRow).at(2).prop('textFirstCell')).toBe('No course available yet');
  });

});
