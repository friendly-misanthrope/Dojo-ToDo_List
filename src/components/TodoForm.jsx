import './TodoForm.css'
import { useState } from 'react'

const TodoForm = (props) => {
  
  // Set up state for values in input
  const [oneToDo, setOneToDo] = useState({
    content: '',
    isComplete: false
  })

  // Destructure getter and setter for todo list
  const { allToDos, setAllToDos } = props
  


  const onChangeHandler = (e) => {
    setOneToDo(prevState => {return {...prevState, [e.target.name]: e.target.value}})
  }

  
  return (
    <div className='todo-form'>
      <h1>To Do List</h1>
      <form action="submit">
        <div className="form-group">
          <label htmlFor="add-task">Add a task to your ToDo List:</label>
          <input type="text" className="form-control" name="content" onChange={onChangeHandler} />
          <input type="submit" className="form-control btn btn-primary" value="Add Task" />
        </div>
      </form>
    </div>
  );
}

export default TodoForm