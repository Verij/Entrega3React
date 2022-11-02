import { TODO_LIST } from "./types";
import { REMOVE_TAREAS} from"./types";

export const TodoListAction = (todo) => ({
  type: TODO_LIST,
  payload: todo,
});

export const RemoveTareas = (todo) => ({
  type: REMOVE_TAREAS,
  payload: todo,
});