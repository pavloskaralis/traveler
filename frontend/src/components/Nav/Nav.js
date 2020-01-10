import React, { Component } from 'react'
import history from '../../history'
import axios from 'axios'
import './Nav.css'
import Dropdown from '../Dropdown/Dropdown.js'

class Nav extends Component {
    render () {
        return (
            <nav>
                <h3>Traveler</h3>
                <div className="dropdown-icon-container">
                    <div className="dropdown-icon" onClick={this.props.toggleDropdown}></div>
                </div>
                {this.props.dropdown && <Dropdown toggleForm={this.props.toggleForm} toggleDropdown={this.toggleDropdown} isLoggedIn={this.props.isLoggedIn} handleLogOut={this.props.handleLogOut}/>}
            </nav>
        )
    }
}

export default Nav

  