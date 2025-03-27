import React,{useState} from 'react'

const Add = () => {
    const [todoItem, setTodoItem] = useState('')
  return (
    <div>
        <h2>Add New Todo</h2>
        <input type="text" placeholder='Add item to add' 
        value={todoItem} onChange={(e)=> setTodoItem(e.target.value)}/>
        <button>Add Todo</button>
    </div>
  )
}

export default Add