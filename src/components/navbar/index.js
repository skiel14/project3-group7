import React from 'react';
import ReactDOM from 'react-dom';
import {Nav, Navbar, Dropdown, ButtonGroup, NavItem, Link, Brand, Button, FormControl, Form} from 'react-bootstrap';
import axios from 'axios';
import {
    getFromStorage,
    setInStorage
} from '../../utils/storage'
import { withRouter } from 'react-router-dom';
import './style.css';

var Router = require('react-router');


class NavBarComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      songs: []
    }
  }

  componentDidMount(){
    var token = getFromStorage('bach2basics')
    if (token) {
        console.log("Token Exists - checking")
        fetch('https://elegant-bastille-67491.herokuapp.com/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
            if (json.success) {
                console.log("here is json")
                console.log(json)
                this.setState({
                    token,
                    userId: json.userId,
                    username: json.username,
                    isLoading: false
                })
                /*
                this.setState(state => {
                  const list = state.songs.concat("abcdefg");
            
                  return {
                    list
                  };
                });
                */
                json.songs.forEach((item,index)=>{
                    let x = this.state.songs.concat(item.songId)
                    this.setState({songs: x });
                  
                  console.log(item.songId)
                  console.log(item.songJSONString)
                })

            }
            else {
                console.log('invalid token')
                this.props.history.push('/login')
            }
        })
    } else{
        console.log("no token found")
        this.setState({
            isLoading: false,
        })
    }
}

logout(e) {
  var token = getFromStorage('bach2basics')
  console.log(token)
  axios.get('https://elegant-bastille-67491.herokuapp.com/api/account/logout?token=' + token)
  .then(response => {
      console.log(response)
      if (response.data){
          console.log('successful logout')
          setTimeout(() => {this.props.history.push('/login')}, 50)
      } else {
          console.log('Sign-up error')
      }
  }).catch(error => {
      console.log('Signup server error: ')
      console.log(error)
  })
}

  render(){
    return(
      <>
      <div>{this.state.songs}</div>
    <Navbar sticky="top" bg="dark" variant="dark">
    <Navbar.Brand href="/">Bach2Basics</Navbar.Brand>
    <Nav className="justify-content-end">
      <Nav.Link href="/">Home</Nav.Link>
      <Dropdown as={ButtonGroup}>
      <Button variant="dark" href="/demo">Practice</Button>
      <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />
      <Dropdown.Menu>
      {this.state.songs.map( (item,index)=>{
        return(
          <Dropdown.Item>{item}</Dropdown.Item>
        )
      })}

      </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={ButtonGroup}>
      <Button variant="dark" href="/composition">Compose</Button>
      <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />
      <Dropdown.Menu>
      {this.state.songs.map( (item,index)=>{
        return(
          <Dropdown.Item>{item}</Dropdown.Item>
        )
      })}

      </Dropdown.Menu>
      </Dropdown>
      <Nav.Link href="/saved">Saved</Nav.Link>
      <Nav.Link onClick={this.logout.bind(this)}>Logout</Nav.Link>
      <Navbar.Collapse className="usertext">
      <Navbar.Text>
      Welcome, {this.state.username}
      </Navbar.Text>
      </Navbar.Collapse>
    </Nav>

    </Navbar>
  </>
    )
    }
  }

export default withRouter(NavBarComponent);
