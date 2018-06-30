import React from 'react';

// Import Material UI Components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// Call Component, items is passed as argument
const TodoList = ({ items }) => (
    // like <ul> tag
    <List>
    {/* Iterate through items, for loop within JSX */}
    {
      items && items.map(
        (item, index) =>
        // For Each Item in Items, Show this Markup
        // like <li> tag
        <ListItem key={index}>
            {/* Like <p> tag */}
            <ListItemText primary={item} />
        </ListItem>)
    }
    </List>
);

export default TodoList;