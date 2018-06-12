import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      input: '',
      tasks: []
    }
  }

  handleTextChange = (event) => {
    this.setState({
      input: event.target.value,
    })    

  }

  addTask = (event) => {
    event.preventDefault(); 
    console.log('submit clicked');
    let taskPackage = {'task': this.state.input, 'id': this.state.tasks.length, 'complete': false}
    this.setState({
      tasks: [...this.state.tasks, taskPackage]
    })
    this.setState({
      input: '',
    }) 
  }


//THIS FUNCTION WOULD HANDLE TOGGLING THE FINISHED TASKS
  handleToggle = (task) => {
    console.log('reached app.jsx');


    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To Do List</h1>
        </header>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>

        <Table tasks={this.state.tasks}
                handleToggle={this.handleToggle} />

        <h3>Add Task</h3>

        <form onSubmit={this.addTask}>
          <input type="text" value={this.state.input} placeholder="task" onChange={this.handleTextChange}/>
          <button type="submit"></button>
        </form>
        

      </div>
    );
  }
}

export default App;
