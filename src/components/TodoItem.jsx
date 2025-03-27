import React from 'react'
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todoSlice';

const TodoItem = ({item}) => {
  const removeItem = () => {
    useDispatch(removeTodo(item.id))
  }
   return (
    <div>
        <p>{item.name} <button onClick={removeItem}>Remove</button></p>
    </div>
  )
}

export default TodoItem