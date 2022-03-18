// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function CourseListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.LIST_COURSE_SUCCESS:
      return { ...state, listCourse: action.payload };
    case types.DELETE_COURSE_SUCCESS:
      return { ...state, course: action.payload };
    case types.FINDBYCNAME_COURSE_SUCCESS:
      return { ...state, listCourse: action.payload };
    case types.GET_COURSE_SUCCESS:
      return { ...state, course: action.payload };
    case types.UPDATE_COURSE_SUCCESS:
      return { ...state, course: action.payload };
    case types.CREATE_COURSE_SUCCESS:
      return { ...state, course: action.payload };
    case types.LIST_COURSE_SUCCESS:
      return { ...state, listCourse: action.payload };
    case types.DELETE_COURSE_SUCCESS:
      return { ...state, course: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}