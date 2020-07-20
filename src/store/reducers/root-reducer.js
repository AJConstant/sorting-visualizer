import algorithmReducer from "./algorithm-reducer";
import topBarReducer from "./top-bar-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({settings: topBarReducer, arrayState: algorithmReducer});

export default rootReducer;