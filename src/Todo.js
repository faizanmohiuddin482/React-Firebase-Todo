import React,{useState} from 'react'
import { Button,Modal,List,ListItem, ListItemAvatar, ListItemText,Avatar } from '@material-ui/core';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
function Todo(props) {
    const [open,setOpen] = useState(false);
    const [input,setInput]=useState('');
    const classes=useStyles();

    const handleOpen = ()=>{
        setOpen(true);
    }
    const updateTodo = ()=>{
        //update the todo with the new input text
        db.collection('todos').doc(props.todo.id).set({
            todo:input
        },{merge:true})
        setOpen(false);
    }

    return (
        <>
        <Modal open={open}
    onClose={e=> setOpen(false)}>
        <div className={classes.paper}>
            <h1>Update Your Todo</h1>
            <input placeholder={props.todo.todo} value={input} onChange={event =>setInput(event.target.value)} />
            <Button onClick={updateTodo}>Update</Button>
        </div>
        </Modal>
        <List>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy Deadline" />
            </ListItem>
            <button onClick={e=>setOpen(true)}>Edit</button>
            <DeleteIcon onClick={event =>{db.collection('todos').doc(props.todo.id).delete()}}/>
        </List>
        </>
    )
}

export default Todo
