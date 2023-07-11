import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import projectsReducer from "./reducers/projectsReducer";
// import projectsReducer from "./reducers/projectsReducer";

const rootReducer = combineReducers({
  projects: projectsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
