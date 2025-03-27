import React,{useState} from 'react'
// Import useDispatch
import { useDispatch } from 'react-redux'
// Import the needed pbject
import { addTodo } from '../features/todoSlice'


const Add = () => {
    const [todoItem, setTodoItem] = useState('')
    const dispatch = useDispatch()

    const addItem = () => {
      dispatch(addTodo({id:Date.now(), name:todoItem}));
      setTodoItem('')
    }
  return (
    <div>
        <h2>Add New Todo</h2>
        <input type="text" placeholder='Add item to add' 
        value={todoItem} onChange={(e)=> setTodoItem(e.target.value)}/>
        <button onClick={addItem}>Add Todo</button>
    </div>
  )
}

export default Add