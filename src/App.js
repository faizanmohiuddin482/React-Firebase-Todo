import React,{useState} from 'react';
import './App.css';

function App() {
  // useState is temporary, as soon as we refresh , it's gone
  const [todos, setTodos] = useState(['Take dogs for a walk','Take dogs for a walk again']);

  return (
    <div className="App">
      <h1>Utilosoft Learn </h1>
      <input />
      <button>Add Todo</button>
      <ul>
        {/* the curly braces are from jsx and the .map is from es6 . map is used for looping */}
        {todos.map}
        <li></li>    
      </ul>
    </div>
  );
}

export default App;
