import React,{useState,useEffect} from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase'
import { Button, InputLabel,FormControl,Input } from '@material-ui/core';
function App() {
  // useState(hook) is temporary or short time memory, as soon as we refresh , it's gone
  const [todos, setTodos] = useState([]);
  const [input,setInput] = useState('')
  
  //when the app loads , we need to listen to the databse and fetch new todos as they get added/removed
  //useeffect runs when the app loads
  useEffect(()=>{
    //This code fires when the app,.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      // console.log(snapshot.docs.map(doc => doc.data()))

      setTodos(snapshot.docs.map(doc => ({id:doc.id,todo:doc.data().todo})))
    })
  },[]);

  const addTodo = (event)=>{
    //this avoids refreshing the page while submitting
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
  //... is spread out which appends into the array
  setTodos([...todos,input]);
  //to clear the input field when we submit
  setInput('');
  }
  return (
    <div className="App">
      <h1>Faizan @Learn </h1>
      <h3>Todo App</h3>
      <form >
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event =>setInput(event.target.value)} />
        </FormControl>
      
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
      </form>
      <ul>
        {/* the curly braces are from jsx and the .map is from es6 . map is used for looping */}
        {/* it goes in todos, uses a var as todo, picks up the first todo from the array and displays using jsx {todo} */}
        {todos.map(todo=>(
         <Todo todo={todo}/>
        ))}
          
      </ul>
    </div>
  );
}

export default App;
