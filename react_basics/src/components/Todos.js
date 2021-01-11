import { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    // // mark complete - use arrow notetion or else need to .bind() otherwise get an error
    // markComplete = (e) => {
    //     console.log(this.props)
    // }

  render(){
      // check if the todos have been passed as props
      console.log(this.props.todos);
    return (
      this.props.todos.map(todo => (
          <TodoItem key={todo.id} todo={ todo } markComplete={this.props.markComplete}
          delTodo={this.props.delTodo}/>
      )) 
    );
  }
}

// can declare which PropTypes are required
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;