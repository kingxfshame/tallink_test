import React from 'react';
import './App.css';
import logo from './logo.png';
import './bootstrap.min.css';
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand">
            <img src={logo} width="480vh" height="60vh" alt="" className="align-center"/>
        </a>
    </nav>
  );
}

export default Nav;
