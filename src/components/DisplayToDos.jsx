import './DisplayToDos.css'

const DisplayToDos = (props) => {

  const {allToDos, setAllToDos} = props

  // Click handler for toggling whether the task is complete
  const toggleComplete = (todo) => {
    const updatedTaskList = allToDos.map((thisTodo) => {
      if (thisTodo === todo) {
        thisTodo.isComplete = !thisTodo.isComplete
      }
      return thisTodo
    })
    // Set allTodos to the updated array
    setAllToDos(updatedTaskList)
  }

  const deleteTaskHandler = (task) => {
    const shortenedTaskList = allToDos.filter((thisTask) => (
      thisTask !== task
    ))
    setAllToDos(shortenedTaskList)
  }
 
  // JSX Return
  return (
    <div className="container">
      {/* Only display this h2 if there are todo items in the array */}
      {
        allToDos.length > 0 ?
        <h2>My ToDo List:</h2>
        : null
      }
      
      <div className="all-todos">
        {/* Iterate through all tasks & display them */}
        { 
          allToDos.map((item, index) => (
            <div key={index} className="each-todo-container">
              <div className="one-todo">
                {/* Only apply the is-complete class to the task content if item.isComplete === true */}
                {
                  item.isComplete ?
                  <h3 className="task-content is-complete">{item.content}</h3>
                  : <h3 className="task-content">{item.content}</h3>
                }
                <div className="complete">
                  <span>Task Complete?</span>
                  {/* set checked to value of isComplete, call toggleComplete with current map item  */}
                  <input type="checkbox" checked={item.isComplete} onClick={() => toggleComplete(item)} />
                </div>
                {/* Call deleteTaskHandler, passing it the current item and allowing the user to delete a task when button is clicked */}
                <button className="btn btn-danger" onClick={() => deleteTaskHandler(item)}>Delete</button>
              </div>  
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default DisplayToDos;