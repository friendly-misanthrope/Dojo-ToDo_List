import './App.css';
import DisplayToDos from './components/DisplayToDos';
import TodoForm from './components/TodoForm';
import { useState } from 'react'

function App() {
  // lifted state for ToDo list
  const [allToDos, setAllToDos] = useState([
    {content: 'Walk dog',
    isComplete: false},
    {content: 'Clean room',
    isComplete: false},
    {content: 'Do dishes',
    isComplete: false},
    {content: 'Vacuum',
    isComplete: false},
    {content: 'Do laundry',
    isComplete: false},
    {content: 'Mow lawn',
    isComplete: false}
  ])
  
  // JSX Return, pass state down through props
  return (
    <div className="App">
      <TodoForm allToDos={allToDos} setAllToDos={setAllToDos} />
      <DisplayToDos allToDos={allToDos} setAllToDos={setAllToDos} />
    </div>
  );
}

export default App;
