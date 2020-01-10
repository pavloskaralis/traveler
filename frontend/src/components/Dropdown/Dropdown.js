import React, { Component } from 'react'
import history from '../../history'
import axios from 'axios'
import './Dropdown.css'

class Dropdown extends Component {
    render () {
        return (
            <div className="dropdown-menu">
                {this.props.isLoggedIn ? 
                    <React.Fragment>
                        <a href="#">itineraries</a>
                        <a href="#">log out</a>
                    </React.Fragment> : 
                    <React.Fragment>
                        <a onClick={this.props.toggleForm} id="Sign Up">sign up</a>
                        <a onClick={this.props.toggleForm}  id="Login">login</a>
                    </React.Fragment> }
            </div>
        )
    }
}

export default Dropdown

  