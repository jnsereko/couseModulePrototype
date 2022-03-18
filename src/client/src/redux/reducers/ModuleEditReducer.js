// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  module: {}
};

// Reducer
export default function ModuleEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_MODULE_SUCCESS:
      return { ...state, module: action.payload };
    case types.LIST_MODULE_SUCCESS:
      return { ...state, listModule: action.payload };
    case types.UPDATE_MODULE_SUCCESS:
      return { ...state, module: action.payload };
    case types.CREATE_MODULE_SUCCESS:
      return { ...state, module: action.payload };
    case types.GET_MODULE_SUCCESS:
      return { ...state, module: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}