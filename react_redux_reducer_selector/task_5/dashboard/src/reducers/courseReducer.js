// reducers/courseReducer.js
import { Map } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

// Initial state using Immutable Map
const initialState = Map({
  courses: Map(),
});

// Course reducer
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const normalizedData = coursesNormalizer(action.data);
      return state.mergeDeep({
        courses: Map(normalizedData.entities.courses).map(course => ({
          ...course,
          isSelected: false,
        })),
      });
    }
    case SELECT_COURSE: {
      return state.setIn(['courses', action.index, 'isSelected'], true);
    }
    case UNSELECT_COURSE: {
      return state.setIn(['courses', action.index, 'isSelected'], false);
    }
    default:
      return state;
  }
};

export default courseReducer;
