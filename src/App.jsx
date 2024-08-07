import { useState } from 'react'
import TodoListForm from './components/TodoListForm'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [todoListState, setTodoListState] = useState([])
  const stateUpdater = (newValue) => {
    setTodoListState([...todoListState, newValue])
  }

  return (
    <>
      <TodoListForm stateUpdater={stateUpdater}/>
      <TodoList todoListState={todoListState} setTodoListState={setTodoListState}/>
    </>
  )
}

export default App