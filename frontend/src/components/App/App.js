import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import history from '../../history'
import axios from 'axios'
import './App.css'
import Nav from '../Nav/Nav.js'
import Home from '../Home/Home.js'

class App extends Component {
  state = {
    isLoggedIn: false,
    username: ''
  }

  componentDidMount = () => {
    if(localStorage.token) {
      axios.get('http://localhost:3001/user/verify/' + localStorage.token)
      .then(response => this.setState({
        isLoggedIn: true, 
        username: response.data.username, 
      }));
    } else {
      this.setState({isLoggedIn: false})
    }
  }

  handleSignUp = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/users/signup', {
        email: this.state.email,
        password: this.state.password
    }).then(response => {
        localStorage.token = response.data.token;
        this.setState({isLoggedIn: true});
    }).catch(err => console.log(err))
  }

  handleLogIn = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/users/login', {
          email: this.state.email,
          password: this.state.password
      }).then(response => {
          localStorage.token = response.data.token;
          this.setState({isLoggedIn: true});
      }).catch(err => console.log(err))
  }

  handleLogOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    this.setState({
      isLoggedIn: false,
      username: '', 
    });
    history.push('/')
  }

  render () {
    return (
      <React.Fragment>
        <Nav isLoggedIn={this.state.isLoggedIn}/>
        <Switch>
        <Route path={'/'} render={()=> <Home toggleForm={this.toggleForm}/>}/>
        </Switch>
      </React.Fragment>            
    )
  }
}

export default App

  