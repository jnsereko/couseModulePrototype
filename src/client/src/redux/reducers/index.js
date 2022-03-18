import { combineReducers } from "redux";

// START IMPORT REDUCERS
import CourseListReducer from "./CourseListReducer";
import HomeReducer from "./HomeReducer";
import ModuleEditReducer from "./ModuleEditReducer";
import UserReducer from "./UserReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	CourseListReducer,
	HomeReducer,
	ModuleEditReducer,
	UserReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
