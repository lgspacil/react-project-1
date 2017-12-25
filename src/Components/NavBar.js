import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, NavbarBrand, MenuItem, Nav } from 'react-bootstrap';
import {Route, IndexRoute, hasHistory, Router, Link} from 'react-router-dom';

class NavBar extends Component {

  render() {

    return (
      <div className="NavBar">
        <h1>NavBar</h1>
        <a href="/home">Home Link</a>
      </div>
    );
  }
}

export default NavBar;
