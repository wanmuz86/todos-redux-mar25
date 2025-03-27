import React from 'react'

const TodoItem = ({item}) => {
   return (
    <div>
        <p>{item} <button>Remove</button></p>
    </div>
  )
}

export default TodoItem