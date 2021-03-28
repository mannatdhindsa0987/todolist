import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';
import AddTodo from './AddToDo.js';






class App extends React.Component {
  state = {
    todos: [
      { Id: '1', Title: 'Push your code to github', Status: 'Done' },
      { Id: '2', Title: 'Email to your manager', Status: 'Pending' }
    ]
 };
 deleteToDo = (todo) => {
  const filteredItems = this.state.todos.filter(x => x.Id !== todo.Id);
  this.setState({
       todos: filteredItems
  });
};
addToDo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        });
    };

editToDo = (x) => {
  this.setState(state => ({
       todos: state.todos.map(todo => {
         if (todo.Id === x.Id) {
             return {
                   ...todo,
                   Status: todo.Status === "Done" ? "Pending" : "Done"
             };
        } else {
            return todo;
        }
    })
}));
};



addToDo = (todo) => {
  this.setState({
      todos: [...this.state.todos, todo]
  });
};

render() {
  return (
      <div>
         <AddTodo onAdd={this.addToDo}></AddTodo>
           <h1>ToDo List</h1>
           <table  className="table">
                   <thead>
                     <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Action</th>
                     </tr>
                   </thead>
                   <tbody>
                       {this.state.todos.map(x => {
                         return (
                              <tr key={x.Id}>
                              <td>{x.Id}</td>
                              <td>{x.Title}</td>
                              <td style={{ color: x.Status === "Done" ? "green" : "red" }}>{x.Status}</td>
                              <td>
                              <button className="btn btn-outline-dark" onClick={() => this.deleteToDo(x)}>
                               <span>
                                 <FontAwesomeIcon icon="trash"></FontAwesomeIcon> 
                               </span>
                              </button>
                              <button className="btn btn-outline-dark" onClick={() => this.editToDo(x)}>
                                <span>
                                  <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                                </span>
                              </button>
                              </td>
                              </tr>
                          );
                       })}
                    </tbody>
                </table>
         </div>
    );
  }




}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>
//           todoApp
//         </h1>
//       </header>
//     </div>
//   );
// }

export default App;
