import React, { Component } from 'react'; // react has to be imported outside of {}
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from "react-uuid";
import Axios from 'axios';

class App extends Component {
  // add states
  state = {
    todos: [
      // {
      //   id: uuid(),
      //   title: 'Take out trash',
      //   compleated: false
      // },
      // {
      //   id: uuid(),
      //   title: 'Take quiz',
      //   compleated: false
      // },
      // {
      //   id: uuid(),
      //   title: 'Take it',
      //   compleated: false
      // }
    ]
  }

  // get components need to use this method
  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos').then(res => this.setState( { todos: res.data }))
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
    // deleting an item from the state
    // if state is a json/website
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({
      todos : [...this.state.todos.filter(
        todo => todo.id !== id
      )]
    }));

    // // if state is local
    // this.setState({ todos : this.state.todos.filter( todo => {
    //   // return the items that have a different id
    //   return todo.id !== id;
    // })});
  }
  // add new 
  addTodo = (title) => {
    // if the state is localy defined
    // let newTodo = {
    //   id: uuid(),
    //   title: title,
    //   compleated: false
    // };
    // if statte is grabed from a json file/website
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      compleated: false
    }).then(res => this.setState({ todos : [...this.state.todos, res.data]})) // .then adds it to our ui
    // add the newTodo
    // have to coppy everything over as well as add the newTodo object
    // cannot use push()
    // this.setState({ todos : [...this.state.todos, newTodo]});
  }

  render(){
    // can access todos from the the render method
    console.log(this.state.todos);
    // you can pass the state objects (todos) as a prop in the <Todos />
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Header /> 
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About}/>
          </div> 
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
