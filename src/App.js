import { useState } from "react";
import "./App.css";

function App() {
  let task;
  const [toDo, setToDo] = useState([]);

  const input = (event) => {
    task = event.target.value;
  };

  // add task
  const addTask = () => {
    if (task != "") {
      setToDo([...toDo, task]);
    } else {
      setToDo(toDo);
    }
  };

  // remove task
  const removeTask = (task) => {
    toDo.splice(task, 1);
    setToDo([...toDo]);
  };

  return (
    <div className="container">
      <div id="newTask">
        <h3>TODO LIST</h3>
        <br />
        <input type="text" onChange={input} placeholder="enter a task" />
        <button onClick={addTask} id="addBtn">Add</button>
      </div>

      <div id="tasks">
        <ul>
          {toDo.map((aTask, index) => (
            <li key={index} id={index}>
              {aTask}
              <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
