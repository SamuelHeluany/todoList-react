import './App.css'
import InputTask from './componnents/InputTask/InputTask'
import { TaskList } from './componnents/TaskList/TaskList'

function App() {

  return (
    <>
      
      <div className="container">
        <h1>Todo List</h1>
        <InputTask />
        <TaskList />
      </div>
    </>
  )
}

export default App
