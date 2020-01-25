import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import fetchUsername from '../../actions/fetchUsername.js'
import logOut from '../../actions/logOut.js'
import history from '../../history'
import axios from 'axios'
import './App.css'
import Nav from '../Nav/Nav.js'
import Form from '../Form/Form.js'
import Home from '../Home/Home.js'
import Index from '../Index/Index.js'
import Show from '../Show/Show.js'

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    username: state.username,
    form: state.form
  }
}
const mapDispatchToProps = {
  fetchUsername,
  logOut
}

class App extends Component {

  componentDidMount = () => {
    this.props.fetchUsername();
  }

  render () {
    return (
      <React.Fragment>
        <Nav/>
        {this.props.form && <Form/>}
        <Switch>
          <Route path={'/'} render={()=> this.props.isLoggedIn? <Index/> : <Home/>}/>
          {this.props.isLoggedIn && <Route path={'/:id'} render={()=> <Show/>}/>}
        </Switch>
      </React.Fragment>            
    )
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App) 

export default App

  