import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    // set state.title to whatever the user enters (e.target.value)
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value}); // matches the e.target.name -> <input name="title"/>
    }

    render() {
        return (
            <div>
                <form style={{ display : 'flex' }}>
                    <input type="text"
                     name="title"
                     placeholder="Add Todo..."
                     style={{flex: '10', padding : '5px'}}
                     value={this.state.title}
                     onChange={this.onChange}/>
                    <input type="submit"
                     value="Submit"
                     className="btn"
                     style={{flex: '1'}}></input>
                </form>
            </div>
        )
    }
}

export default AddTodo
