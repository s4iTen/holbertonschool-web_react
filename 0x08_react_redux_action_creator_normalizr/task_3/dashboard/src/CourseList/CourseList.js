import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    courseList: {
        width: '100%',
        borderCollapse: 'collapse',
        border: '1px solid #ccc',
    },
    theadFirstChild: {
        textAlign: 'center',
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
const CourseList = ({ listCourses = [] }) => {
    return (
        <table className={css(styles.courseList)}>
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
            </thead>
            <tbody>
                {listCourses.length === 0 ? (
                    <CourseListRow isHeader={false} textFirstCell="No course available yet" />
                ) : (
                    listCourses.map((course, index) => (
                        <CourseListRow
                            key={index}
                            isHeader={false}
                            textFirstCell={course.name}
                            textSecondCell={course.credit}
                        />
                    ))
                )}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            credit: PropTypes.number.isRequired,
        })
    ),
};

CourseList.defaultProps = {
    listCourses: [],
};

export default CourseList;