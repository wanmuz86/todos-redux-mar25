
import './App.css'
import Add from './components/Add'
import TodoList from './components/TodoList'
import ReduxProvider from './ReduxProvider'
function App() {

  return (
    <main>
    <ReduxProvider>
    <Add/>
    <hr/>
    <TodoList/>
    </ReduxProvider>
    </main>
  )
}

export default App
