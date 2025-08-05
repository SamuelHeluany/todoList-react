import { useState } from 'react'
import './TodoList.css'
import Trash from '../../assets/Trash.svg'

const TodoList = () => {
  const [taskName, setTaskName] = useState('')
  const [taskList, setTaskList] = useState([])

  function addTask() {
    if (taskName.length > 0) {
      setTaskList([taskName, ...taskList])
    } else {
      alert('Digite o nome da tarefa')
    }
    setTaskName('')
    console.log(taskList)
  }

  const handleKeyDown = ({ key }) => {
    if (key === 'Enter' && taskName.length > 0) {
      addTask()
    }
  }

  const deleteTask = (index) => {
    const newList = [...taskList]
    newList.splice(index, 1)
    setTaskList(newList)
  }

  const editTaskName = (index) => {
    const newTaskName = prompt('Digite o novo nome da tarefa:')
    taskList[index] = newTaskName
    setTaskList([...taskList])
    console.log(taskList)
  }


  return (
    <div className="todoList">
      <div className="inputTask">
        <input type="text"
          name="taskName"
          value={taskName}
          placeholder='Digite o nome da sua tarefa...'
          maxLength={40}
          onKeyDown={handleKeyDown}
          onChange={(e) => { setTaskName(e.target.value) }} />
        <button
          className='addButton'
          onClick={addTask}
        >ADD</button>
      </div>
      <div className="listTask">
        <ul>
          {taskList.map((task, index) => (
            <li key={index}>{task}
              <button onClick={() => editTaskName(index)}><img src={Trash} /></button>
              <button onClick={() => deleteTask(index)}><img src={Trash} /></button></li>
          ))}
        </ul>
      </div>

    </div>
  )
}
export default TodoList