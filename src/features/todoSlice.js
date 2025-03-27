import {createSlice} from '@reduxjs/toolkit'

// Redux configuration file
const todoSlice = createSlice({
    name:'todos',
    initialState : {todos:[]}, // all the states
    reducers: {    // all the actions
        addTodo:(state, action) => {
           // state.todos = [...state.todos, action.payload]
            state.todos.push(action.payload)
        },
        removeTodo:(state, action)=> {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)

        }

    }  
})

export const {addTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer