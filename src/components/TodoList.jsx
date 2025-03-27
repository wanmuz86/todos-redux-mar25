import React from 'react'
import TodoItem from './TodoItem'

import { useSelector } from 'react-redux'

const TodoList = () => {
  // Retrieve the todos from the redux state and 
    const todos = useSelector((state)=> state.todos);
  return (
    <div>
        <h2>List To Do</h2>
        {
            todos.map(val=> 
                <TodoItem key={val} item={val}/>
            )
        }
    </div>
  )
}

export default TodoList