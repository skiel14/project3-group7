import React from 'react';
import './style.css';
import axios from 'axios'
import {
    getFromStorage,
    setInStorage
} from '../../utils/storage'

var Router = require('react-router');

class Home extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        isLoading: true
      }
    }

    componentDidMount(){
        var token = getFromStorage('bach2basics')
        if (token) {
            console.log("Token Exists - checking")
            fetch('/api/account/verify?token=' + token)
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
                }
            })
        } else{
            console.log("no token found")
            this.setState({
                isLoading: false,
            })
        }
    }
    
    handleChange(e) {
        /*
        let value = e.target.value;
        const name = e.target.name;
        if (name === "password") {
            value = value.substring(0, 15);
          }
        this.setState({
            [name]: value
        })
        console.log(this.state)
        */
    }

    handleSubmit(e) {
        /*
        e.preventDefault()
        console.log('signupform, username:')
        console.log(this.state.username)
        //Request Server Here
        axios.post('http://localhost:8080/api/account/signin',{
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log(response)
            if (response.data){
                console.log('successful signup')
                setTimeout(Router.browserHistory.push('/'), 3000);
            } else {
                console.log('Sign-up error')
            }
        }).catch(error => {
            console.log('Signup server error: ')
            console.log(error)
        })
        */
    }
    render(){
    var {
        isLoading,
        token,
    } = this.state
    
    if (isLoading){
        return(
            <div><p>Loading...</p></div>
        )
    }

    if (!token) {
        this.props.history.push('/')
        return(<div><p>redirect to login</p></div>)
    }

    if (token) {
        return (
            <>
            <p>Welcome {this.state.username}!</p>
            <button id='logoutButton'>Logout</button>
            </>
        )
    }
    /*
    return (
        <>  
            <div className="container">
                <div className="card card-container">
                    <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                    <p id="profile-name" className="profile-name-card"></p>
                    <p className="text-center">Account Creation</p>
                    <form className="form-signin">
                        <span id="reauth-email" className="reauth-email"></span>
                        <input name="username" type="text" id="inputUsername" className="form-control" placeholder="Username" value={this.state.username} onChange={this.handleChange.bind(this)}required autoFocus></input>
                        <input name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this)} required></input>
                        <div id="remember" className="checkbox">
                        </div>
                        <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" onClick={this.handleSubmit.bind(this)}>Create Account</button>
                    </form>
                </div>
            </div>
        </>
        )
        */
    }}
export default Home;