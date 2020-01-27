import React, { Component } from 'react'
import { connect } from 'react-redux'
import toggleDropdown from '../../actions/toggleDropdown.js'
import Dropdown from '../Dropdown/Dropdown.js'
import './Nav.css'


const mapStateToProps = state => {
    return {
        dropdown: state.dropdown
    }
}

const mapDispatchToProps = {
    toggleDropdown
}

function Nav({dropdown, toggleDropdown}) {
    return (
        <nav>
            <h2>Traveler</h2>
            <div className="dropdown-icon-container" onClick={() => toggleDropdown(!dropdown)}>
                <span> </span>
                <span> </span>
                <span> </span>
            </div>
            {dropdown && <Dropdown/>}
        </nav>
    )
}

Nav = connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav)

export default Nav

  