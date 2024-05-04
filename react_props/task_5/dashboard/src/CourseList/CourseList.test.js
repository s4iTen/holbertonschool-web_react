// CourseList/CourseList.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('<CourseList />', () => {
  // ... existing tests ...

  it("CourseList renders correctly if listCourses is not passed", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow')).toHaveLength(3);
});
  
  it("CourseList renders correctly if listCourses is an empty array", () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find('CourseListRow')).toHaveLength(3);
  });
  
  it("CourseList renders the right number of CourseListRow when listCourses is passed", () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find('CourseListRow')).toHaveLength(listCourses.length + 2);
  });
  
});