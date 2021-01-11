import React from 'react';

function Header (){
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
        </header>
    )
}

// header styleing
const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlighn: 'center',
    padding: '10 px'
  }

export default Header;