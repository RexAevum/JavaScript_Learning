import React from 'react';
import { Link } from 'react-router-dom';

function Header (){
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
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

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;