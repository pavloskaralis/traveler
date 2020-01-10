import React, { Component } from 'react'
import history from '../../history'
import axios from 'axios'
import './Dropdown.css'

class Dropdown extends Component {
    render () {
        return (
            <div className='dropdown-menu'>
                {this.props.isLoggedIn ? 
                    <React.Fragment>
                        <a href='/'>itineraries</a>
                        <a href='/' onClick={this.props.handleLogOut}>log out</a>
                    </React.Fragment> : 
                    <React.Fragment>
                        <a onClick={this.props.toggleForm} id='signup'>sign up</a>
                        <a onClick={this.props.toggleForm} id='login'>login</a>
                    </React.Fragment> }
            </div>
        )
    }
}

export default Dropdown

  