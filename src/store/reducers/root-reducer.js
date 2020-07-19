import { combineReducers } from "redux";
import topBarReducer from "./top-bar-reducer";

const rootReducer = combineReducers({topBarReducer});

export default rootReducer;