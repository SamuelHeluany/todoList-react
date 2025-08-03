import { useState } from 'react'
import './InputTask.css'

const InputTask = () => {
  const [taskName, setTaskName] = useState('')
  const [tasks, setTasks] = useState([])

  const handleInputName =(e) => {
    setTaskName(e.target.value)
    console.log(taskName)
  }

  const getTasks = () => {
    
  }

  return (
    <div className="inputTask">
          <input type="text" 
          name="taskName" 
          placeholder='Digite o nome da tarefa...' 
          onChange={handleInputName}/>
          <button>ADD</button>
        </div>
  )
}

export default InputTask