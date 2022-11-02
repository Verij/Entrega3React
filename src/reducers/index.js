import {combineReducers} from "redux";

import todosReducer from "./reducer";

const reducer = combineReducers(
  {
  
  todos: todosReducer,
});

export default reducer;