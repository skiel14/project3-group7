import React from 'react';
import ReactDOM from 'react-dom';
import {Nav, Navbar, NavItem, Link, Brand, Button, FormControl, Form} from 'react-bootstrap';

class NavBarComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true
    }
  }
  render(){
    return(
      <>
    <Navbar sticky="top" bg="dark" variant="dark">
    <Navbar.Brand href="/">Bach2Basics</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/landing">Home</Nav.Link>
      <Nav.Link href="/demo">Practice</Nav.Link>
      <Nav.Link href="/composition">Compose</Nav.Link>
      <Nav.Link href="/saved">Saved</Nav.Link>
    </Nav>

    </Navbar>
  </>
    )
    }
  }

export default NavBarComponent;
