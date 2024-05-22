import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

const styles = StyleSheet.create({
  courseList: {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #ccc',
  },
  theadTr: {
    borderBottom: '1px solid #ccc',
  },
  tdTh: {
    textAlign: 'left',
  },
  th: {
    fontFamily: 'sans-serif',
  },
});

function CourseList({ listCourses = [] }) {
  return (
    <table className={css(styles.courseList)}>
      <thead className={css(styles.theadTr)}>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length > 0 ? (
          listCourses.map(({ id, name, credit }) => (
            <CourseListRow key={id} textFirstCell={name} textSecondCell={String(credit)} isHeader={false} />
          ))
        ) : (
          <CourseListRow textFirstCell="No course available yet" isHeader={false} />
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;