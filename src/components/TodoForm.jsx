import './TodoForm.css'

const TodoForm = (props) => {

  const { allToDos, setAllToDos } = props
  
  return (
    <div className='todo-form'>
      <h1>To Do List</h1>
      <form action="submit">
        <div className="form-group">
          <label htmlFor="add-task">Add a task to your ToDo List:</label>
          <input type="text" className="form-control" />
          <input type="submit" className="form-control btn btn-primary" value="Add Task" />
        </div>
      </form>
    </div>
  );
}

export default TodoForm