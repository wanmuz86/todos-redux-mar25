import React from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
    const todos = ["Learn React","Learn State Management","Learn API Call"]
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