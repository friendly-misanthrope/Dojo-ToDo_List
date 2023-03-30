import './TodoForm.css'
import { useState } from 'react'

const TodoForm = (props) => {
  
  // Set up state for values in input
  const [oneToDo, setOneToDo] = useState({
    content: '',
    isComplete: false
  })

  // Destructure input state into individual variables
  const {content, isComplete} = oneToDo

  // Destructure getter and setter for full todo list
  const { setAllToDos } = props
  

  // change handler for text input
  const onChangeHandler = (e) => {
    setOneToDo(prevState => {return {...prevState, [e.target.name]: e.target.value}})
  }

  // submit handler for submitting a task
  const createToDo = (e) => {
    e.preventDefault()
    setAllToDos(prevState => {return [...prevState, oneToDo]})

    setOneToDo({
      content: '',
      isComplete: false
    })
  }

  
  return (
    <div className='todo-form'>
      <h1>To Do List</h1>
      <form action="submit" onSubmit={createToDo}>
        <div className="form-group">
          <label htmlFor="add-task">Add a task to your ToDo List:</label>
          <input type="text" className="form-control" name="content" onChange={onChangeHandler} value={content} />
          <input type="submit" className="form-control btn btn-primary" value="Add Task" />
        </div>
      </form>
    </div>
  );
}

export default TodoForm