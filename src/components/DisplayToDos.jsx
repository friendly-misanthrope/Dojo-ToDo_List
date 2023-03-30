import './DisplayToDos.css'

const DisplayToDos = (props) => {

  const {allToDos, setAllToDos} = props

  return (
    <div className="container">
      <h2>My ToDo List:</h2>
      <div className="all-todos">
        {
          allToDos.map((item, index) => (
            <div className="each-todo-container">
              <div key={index} className="one-todo">
                <h3 className="task-content">{item.content}</h3>
                <span>Task Complete?</span><input type="checkbox" />
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
