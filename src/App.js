
import './App.css';
// eslint-disable-next-line
import { User } from './User.js';
import { useState } from "react";


function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask]= useState("")

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
  };

  const deletTask = (taskName) => {
    setTodoList()
  };

  return ( 
    <div className="App"> 
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task)=> {
          return (
          <div>
            <h1>{task}</h1>
            <button onClick={() => deleteTask(task)}>X</button>
          </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
 