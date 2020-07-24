import { createStore } from "redux";
import rootReducer from "./reducers/root-reducer.js";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

export default store;