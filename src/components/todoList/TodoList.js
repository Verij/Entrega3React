import React from 'react'
import { TodoForm } from '../todoForm/TodoForm';
import { TareasListaContainer, StyledContainer, TareaCointainer } from './TodoListStyles';
import {useSelector, useDispatch} from "react-redux";
import { TodoListAction } from '../../types/action';

const TodoList = () => {

  const state = useSelector((state)=>({ ...state.todos}));
  let dispatch = useDispatch();

  const crear = (nuevoTodo) => {
    dispatch(TodoListAction(nuevoTodo))
  };
  

  return (<>
  <StyledContainer>
    <TodoForm createTodo={crear}></TodoForm>

    <TareasListaContainer>{state.todos && state.todos.map((todo) => {
      return (
        <TareaCointainer>
          <p key={todo.id}>{todo.tarea}</p>
          </TareaCointainer>
      )
    })}</TareasListaContainer>
    </StyledContainer>
</>
  );
};

export default TodoList;
