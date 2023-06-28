import { combineReducers } from "redux";
import projectsReducer from "./projectsReducer";

const rootReducer = combineReducers({
  projects: projectsReducer,
  // Другие редьюсеры, если есть
});

export default rootReducer;
