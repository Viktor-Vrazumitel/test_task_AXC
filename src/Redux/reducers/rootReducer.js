import { combineReducers } from "redux";
import { errorReducer } from "./errorReducer";
import { loaderReducer } from "./loaderReducer";
import { peopleReducer } from "./peopleReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  people: peopleReducer,
  loader: loaderReducer,
  error: errorReducer,
});
