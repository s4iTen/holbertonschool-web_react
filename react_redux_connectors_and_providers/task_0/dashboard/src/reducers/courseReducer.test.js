import { Map } from 'immutable';
import courseReducer from '../reducers/courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

describe('courseReducer', () => {
  const initialState = Map({
    courses: Map(),
  });

  it('should return the initial state when no action is passed', () => {
    expect(courseReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: '1', name: 'ES6', credit: 60 },
        { id: '2', name: 'Webpack', credit: 20 },
        { id: '3', name: 'React', credit: 40 },
      ],
    };

    const normalizedData = coursesNormalizer(action.data);
    const expectedState = initialState.mergeDeep({
      courses: Map(normalizedData.entities.courses).map(course => ({
        ...course,
        isSelected: false,
      })),
    });

    expect(courseReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle SELECT_COURSE', () => {
    const initialState = Map({
      courses: Map({
        '1': { id: '1', name: 'ES6', credit: 60, isSelected: false },
        '2': { id: '2', name: 'Webpack', credit: 20, isSelected: false },
        '3': { id: '3', name: 'React', credit: 40, isSelected: false },
      }),
    });

    const action = { type: SELECT_COURSE, index: '2' };

    const expectedState = initialState.setIn(['courses', '2', 'isSelected'], true);

    expect(courseReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle UNSELECT_COURSE', () => {
    const initialState = Map({
      courses: Map({
        '1': { id: '1', name: 'ES6', credit: 60, isSelected: false },
        '2': { id: '2', name: 'Webpack', credit: 20, isSelected: true },
        '3': { id: '3', name: 'React', credit: 40, isSelected: false },
      }),
    });

    const action = { type: UNSELECT_COURSE, index: '2' };

    const expectedState = initialState.setIn(['courses', '2', 'isSelected'], false);

    expect(courseReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });
});
