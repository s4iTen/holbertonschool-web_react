import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  it('renders correctly with header data', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="Available courses" textSecondCell="Course name" isHeader={true} />
    );
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('renders correctly with course data', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="React" textSecondCell="Course name" isHeader={false} />
    );
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('input[type="checkbox"]')).toHaveLength(1);
  }); 

  it('applies rowChecked style when checkbox is checked', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false} />
    );
    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.simulate('change', { target: { checked: true } });
    expect(wrapper.find('.rowChecked')).toHaveLength(1);
  });
});
