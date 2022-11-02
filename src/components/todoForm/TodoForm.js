import React, { useState } from 'react'
import { TodoFormContainer } from './TodoFormStyles'
import { useDispatch } from "react-redux";
import { RemoveTareas } from '../../types/action';

export const TodoForm = ({createTodo}) => {

  const [tarea, setTarea] = useState ("");



  let dispatch = useDispatch();



  const handleSubmit = (e) => {
    
    e.preventDefault();
    createTodo(tarea);
    setTarea("");

  };

const handleDelete = (e) =>{
  e.preventDefault();
  dispatch(RemoveTareas());
}

  return (
    <TodoFormContainer>
      <div>
      <form> <input type="text"  value={tarea} onChange={(e) => setTarea(e.target.value)}/>
        <button onClick={handleSubmit}>Agregar Tarea</button>
        <button onClick={handleDelete}>Borrar</button>
        </form>
    </div>
    </TodoFormContainer>
  )
}
