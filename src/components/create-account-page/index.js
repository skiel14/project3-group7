import React from 'react';
import './style.css';
import axios from 'axios'
import {withRouter} from 'react-router-dom';

var Router = require('react-router');



class CreateAccountPage extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        username: '',
        password: ''
      }
    }
    handleChange(e) {
        let value = e.target.value;
        const name = e.target.name;
        if (name === "password") {
            value = value.substring(0, 15);
          }
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log('signupform, username:')
        console.log(this.state.username)
        //Request Server Here
        axios.post('https://elegant-bastille-67491.herokuapp.com/api/account/signup',{
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log(response)
            if (response.data){
                console.log('successful signup')
                console.log(response.data)
                document.getElementById('notification').innerHTML = response.data.message
                setTimeout(() => {this.props.history.push('/')}, 2000)
            } else {
                console.log('Sign-up error')
            }
        }).catch(error => {
            console.log('Signup server error: ')
            console.log(error)
        })
    }
    render(){
    return (
        <>
            <div className="container">
                <div className="card card-container">
                    <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                    <p id="profile-name" className="profile-name-card"></p>
                    <p className="text-center">Account Creation</p>
                    <p id="notification"></p>
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
    }}
export default CreateAccountPage;
