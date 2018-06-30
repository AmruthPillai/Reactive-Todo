import React, { Component } from 'react';

// Import Custom Component
import TodoList from './TodoList';

// Import Components from Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Todo extends Component {
    // On Change
    onChange = (event) => {
      this.setState({item: event.target.value});
    }

    // On Submit
    onSubmit = (event) => {
      event.preventDefault();

      // Setting State
      this.setState({
        items: [...this.state.items, this.state.item],
        item: ''
      });
    }

    // Constructor
    constructor(props) {
      super(props);

      // State Parameters
      this.state = {
        item: '',
        items: []
      };
    }
    
    // Render Function
    render() {
      return (
        <div style={{ margin: '30px' }}>

          {/* Form, onSubmit */}
          <form onSubmit={this.onSubmit}>

            <TextField
              id="item"
              label="What do you want to do?"
              fullWidth
              value={this.state.item}
              onChange={this.onChange}
            />

            <div style={{ padding: '10px' }} />

            {/* Button, from Material UI */}
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>

          </form>

          {/* TodoList Component */}
          <TodoList items={this.state.items} />

        </div>
      );
    }
  }
  
  export default Todo;