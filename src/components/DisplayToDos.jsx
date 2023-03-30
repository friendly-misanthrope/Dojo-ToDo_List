import './DisplayToDos.css'

const DisplayToDos = (props) => {

  const {allToDos, setAllToDos} = props

  const toggleComplete = (todo) => {
    const updatedTaskList = allToDos.map((thisTodo) => {
      if (thisTodo === todo) {
        thisTodo.isComplete = !thisTodo.isComplete
      }
      return thisTodo
    })
    setAllToDos(updatedTaskList)
  }

  return (
    <div className="container">
      {
        allToDos.length > 0 ?
        <h2>My ToDo List:</h2>
        : null
      }
      
      <div className="all-todos">
        {
          allToDos.map((item, index) => (
            <div key={index} className="each-todo-container">
              <div className="one-todo">
                {
                  item.isComplete ?
                  <h3 className="task-content is-complete">{item.content}</h3>
                  : <h3 className="task-content">{item.content}</h3>
                }
                <div className="complete">
                  <span>Task Complete?</span>
                  <input type="checkbox" checked={item.isComplete} onClick={() => toggleComplete(item)} />
                </div>
                <button className="btn btn-danger">Delete</button>
              </div>  
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default DisplayToDos;