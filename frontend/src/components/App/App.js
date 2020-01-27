import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import fetchUsername from '../../actions/fetchUsername.js'
import './App.css'
import Nav from '../Nav/Nav.js'
import Form from '../Form/Form.js'
import Home from '../Home/Home.js'
import Index from '../Index/Index.js'
import Show from '../Show/Show.js'

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    form: state.form
  }
}

const mapDispatchToProps = {
  fetchUsername
}

function App({isLoggedIn,form,fetchUsername}) {
  useEffect(fetchUsername)
  return (
    <React.Fragment>
      <Nav/>
      {form && <Form/>}
      <Switch>
        <Route path={'/'} render={()=> isLoggedIn? <Index/> : <Home/>}/>
        {isLoggedIn && <Route path={'/:id'} render={()=> <Show/>}/>}
      </Switch>
    </React.Fragment>  
  )
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App) 

export default App

  