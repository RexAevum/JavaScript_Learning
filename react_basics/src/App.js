import { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

class App extends Component {
  // add states
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        compleated: false
      },
      {
        id: 2,
        title: 'Take quiz',
        compleated: false
      },
      {
        id: 3,
        title: 'Take it',
        compleated: false
      }
    ]
  }

  // mark complete - use arrow notetion or else need to .bind() otherwise get an error
  markComplete = (id) => {
    // check for the item in the state and toggle compleated to the opposite state
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.compleated = !todo.compleated;
      }
      return todo; 
    })});
}
  // delete the selected item
  delTodo = (id) => {
    //
    this.setState({ todos : this.state.todos.filter( todo => {
      // return the items that have a different id
      return todo.id !== id;
    })})
  }

  render(){
    // can access todos from the the render method
    console.log(this.state.todos);
    // you can pass the state objects (todos) as a prop in the <Todos />
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} markComplete={this.markComplete}
          delTodo={this.delTodo}/>
        </div> 
      </div>
    );
  }
}



export default App;
