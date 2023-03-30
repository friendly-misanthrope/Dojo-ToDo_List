import './TodoForm.css'
import { useState } from 'react'

const TodoForm = (props) => {
  
  // Set up state for values in input
  const [oneToDo, setOneToDo] = useState({
    content: '',
    isComplete: false
  })

  // Destructure input state into individual variables
  const { content } = oneToDo

  // Destructure getter and setter for full todo list
  const { setAllToDos } = props
  

  // change handler for text input
  const onChangeHandler = (e) => {
    setOneToDo(prevState => {return {...prevState, [e.target.name]: e.target.value}})
  }

  const validateForm = () => {
    if (content.length < 3) {
      return false
    }
    return true
  }

  // submit handler for submitting a task
  const createToDo = (e) => {
    e.preventDefault()
    if (validateForm()){
      setAllToDos(prevState => {return [...prevState, oneToDo]})

      setOneToDo({
        content: '',
        isComplete: false
      })
      return true
    }
    return false
  }

  // JSX Return
  return (
    <div className='todo-form'>
      <h1>To Do List</h1>
      <form action="submit" onSubmit={createToDo}>
        <div className="form-group">
          <label htmlFor="content">Add a task to your ToDo List:</label>
          <input type="text" className="form-control" name="content" onChange={onChangeHandler} value={content} />
          {
            content.length > 0 && content.length < 3 ?
            <p className="error">Task must be 3 or more characters long.</p>
            : null
          }
          <input type="submit" className="form-control btn btn-primary" value="Add Task" disabled={validateForm() ? false : true }/>
        </div>
      </form>
    </div>
  );
}

export default TodoForm