import React, { Component } from 'react';

import Header from './Header';
import Todo from './Todo';

class App extends Component {
  render() {
    return (
      // You can return only one element
      <div>
        {/* You can have as many components inside the root */}
        <Header />
        <Todo />
      </div>
    );
  }
}

export default App;
