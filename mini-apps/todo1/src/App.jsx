import React from 'react';
import './App.css';

import UserInput from './components/userInput.jsx';
import Todo from './components/todos.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '',
      todos: ['Default Todo']
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.deleteAll = this.deleteAll.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    let todos = [...this.state.todos, this.state.value];
    this.setState({
      todos: todos,
      value: ''
    })
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  deleteAll() {
    this.setState({
      todos: []
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is my ToDo App!</h1>
        
        <UserInput submit={this.handleSubmit} 
        change={this.handleChange}
        textField={this.state.value}
        />
        {this.state.todos.map((item, index) => {
          return (<Todo todo={item} key={index}/>)
        })}
        <button onClick={this.deleteAll}>Delete All</button>
      </div>
    );
  }
}

export default App;
