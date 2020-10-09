import React from 'react'
import { List,ListItem, ListItemAvatar, ListItemText,Avatar } from '@material-ui/core';
function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Dummy Deadline" />
            </ListItem>
        </List>
    )
}

export default Todo
