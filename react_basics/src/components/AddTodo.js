import React, { Component } from 'react'
import PropTypes from 'prop-types'; 

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        // prevent from submitting the page
        e.preventDefault();
        // add it to the App.state
        this.props.addTodo(this.state.title);
        // clear the field
        this.setState( { titile: '' });
    };

    // set state.title to whatever the user enters (e.target.value)
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value}); // matches the e.target.name -> <input name="title"/>
    };

    render() {
        return (
            <div>
                <form style={{ display : 'flex' }} onSubmit={this.onSubmit}>
                    <input type="text"
                     name="title"
                     placeholder="Add Todo..."
                     style={{flex: '10', padding : '5px'}}
                     value={this.state.title}
                     onChange={this.onChange}/>
                    <input type="submit"
                     value="Submit"
                     className="btn"
                     style={{flex: '1'}}
                     ></input>
                </form>
            </div>
        )
    }
}
AddTodo.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default AddTodo
