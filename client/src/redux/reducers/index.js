import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./reducer_auth";

export default combineReducers({
  form: formReducer,
  auth
});
