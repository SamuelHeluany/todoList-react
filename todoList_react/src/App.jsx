import './App.css'
import InputTask from './componnents/InputTask/InputTask'
import { TaskList } from './componnents/TaskList/TaskList'

function App() {

  return (
    <>
      <div className="container">
        <InputTask />
        <TaskList />
      </div>
    </>
  )
}

export default App
