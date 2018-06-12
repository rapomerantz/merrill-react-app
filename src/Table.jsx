import React, { Component } from 'react'

export default class Table extends Component {

    handleToggle = (event) => {
        console.log(event.target.value);
        this.props.handleToggle(event.target.value); 
        
    }

  render() {

    let tableRowsArray = this.props.tasks.map((task) => {
        return (
            <tr id={task.id}>
                <td>{task.task}</td>
                <td><input type="checkbox" value={task} onChange={this.handleToggle}/></td>
            </tr>
        )
    })

    return (
      <div>
          <table>
              <thead>
                  <th>
                      Task
                  </th>
                  <th>
                      Done?
                  </th>
              </thead>
              <tbody>
                      {tableRowsArray}
              </tbody>
          </table>
        
      </div>
    )
  }
}
