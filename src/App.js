import { useState } from 'react';
import './App.css';

function App() {
  const [toDo, setToDo] = useState(["todo"]);
  // console.log([...toDo, "newList"])
  function add(e) {
    e.preventDefault();
    setToDo([...toDo, e.target.newList.value]);
  }
  function remove(e) {
    e.preventDefault();
    setToDo([""]);
  }

  function remove(index) {
    console.log(index);
    toDo.splice(index, 1);
    setToDo([...toDo]);
  }

  return (
    <div className="App">
      <form onSubmit={add}>
        <input name='newList' />
        <button type='submit'>add</button>
      </form>

      <ul className='lists'>
        {toDo.map((list, index) =>
          <li key={index}>{list}<button onSubmit={remove} type='submit'>remove</button></li>
        )}
      </ul>
    </div>
  )
}

export default App;
