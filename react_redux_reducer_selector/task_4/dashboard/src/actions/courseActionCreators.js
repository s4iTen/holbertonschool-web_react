import { bindActionCreators } from 'redux';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const fetchCourseSuccess = (data) => {
  return {
    type: FETCH_COURSE_SUCCESS,
    data,
  };
};

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index,
  };
};

export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index,
  };
};

// Bind action creators
export const boundFetchCourseSuccess = (dispatch) => bindActionCreators(fetchCourseSuccess, dispatch);
export const boundSelectCourse = (dispatch) => bindActionCreators(selectCourse, dispatch);
export const boundUnSelectCourse = (dispatch) => bindActionCreators(unSelectCourse, dispatch);
