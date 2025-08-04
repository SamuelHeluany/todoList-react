import { useState } from 'react'
import './TodoList.css'

const TodoList = () => {
  const [taskName, setTaskName] = useState('')
  const [taskList, setTaskList] = useState([])

  return (
    <div className="todoList">
      <div className="inputTask">
        <input type="text" name="taskName"  />
          <button className='addButton'>ADD</button>
      </div>
      <div className="listTask">
        <ul>
          <li>TESTE <button>TE</button></li>
          <li>TESTE</li>
          <li>TESTE</li>
          <li>TESTE</li>
          <li>TESTE</li>
          <li>TESTE</li>
          <li>TESTE</li>

        </ul>
      </div>
          
        </div>
  )
}

export default TodoList