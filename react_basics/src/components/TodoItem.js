import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    // define a function that will pick a color based off if the item is completed or not
    // this will cross out text of the tasks that are already done
    getStyle = () => {
        if (this.props.todo.compleated){
            return  {
                textDecoration: 'line-through',
                background: '#f4f4f4',
                borderBottom: '1px #ccc dotted',
                padding: '10px'
            }
        }else{
            return {
                textDecoration: 'none',
                background: '#f4f4f4',
                borderBottom: '1px #ccc dotted',
                padding: '10px'
            }
        }
    }

    // // mark complete - use arrow notetion or else need to .bind() otherwise get an error
    // markComplete = (e) => {
    //     console.log(this.props)
    // }

    render() {
        // Pull out variables from 
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        );
    }
}

// can declare which propTypes are required
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const itemStyle = {
    backgroundColor: '#f4f4f4'
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default TodoItem;
