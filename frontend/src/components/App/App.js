import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import history from '../../history'
import axios from 'axios'
import './App.css'
import Nav from '../Nav/Nav.js'
import Form from '../Form/Form.js'
import Home from '../Home/Home.js'
import Index from '../Index/Index.js'

class App extends Component {
  state = {
    isLoggedIn: false,
    username: '',
    form: '',
    dropdown: false
  }

  componentDidMount = () => {
    if(localStorage.token) {
      axios.get('http://localhost:3001/user/verify/' + localStorage.token)
      .then(response => this.setState({
        isLoggedIn: true, 
        username: response.data.username, 
        form: '',
        dropdown: false
      }));
    } else {
      this.setState({isLoggedIn: false})
    }
  }

  handleLogOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    this.setState({
      isLoggedIn: false,
      username: '', 
      dropdown: false
    });
    history.push('/')
  }

  toggleForm = (e) => this.setState({form: e.target.id })

  toggleDropdown = () => this.setState({dropdown: !this.state.dropdown});

  render () {
    return (
      <React.Fragment>
        <Nav isLoggedIn={this.state.isLoggedIn} toggleForm={this.toggleForm} toggleDropdown={this.toggleDropdown} dropdown={this.state.dropdown} handleLogOut={this.handleLogOut}/>
        {this.state.form && <Form toggleForm={this.toggleForm} type={this.state.form} remount={this.componentDidMount}/>}
        <Switch>
          <Route path={'/'} render={()=> this.state.isLoggedIn? <Index/> : <Home toggleForm={this.toggleForm}/>}/>
        </Switch>
      </React.Fragment>            
    )
  }
}

export default App

  