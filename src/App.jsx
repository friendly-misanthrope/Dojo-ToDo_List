import './App.css';
import DisplayToDos from './components/DisplayToDos';
import TodoForm from './components/TodoForm';
import { useState } from 'react'

function App() {
  // lifted state for ToDo list
  const [allToDos, setAllToDos] = useState([])
  
  // JSX Return, pass state down through props
  return (
    <div className="App">
      <TodoForm allToDos={allToDos} setAllToDos={setAllToDos} />
      <DisplayToDos allToDos={allToDos} setAllToDos={setAllToDos} />
    </div>
  );
}

export default App;
