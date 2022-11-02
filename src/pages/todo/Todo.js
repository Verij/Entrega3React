import React from 'react'
import TodoList from '../../components/todoList/TodoList';
import { StyledContainer } from '../../components/todoList/TodoListStyles';



export const Todo = () => {
  return (
       <StyledContainer> 
    <TodoList></TodoList>
    </StyledContainer>
  )
}
export default Todo;
