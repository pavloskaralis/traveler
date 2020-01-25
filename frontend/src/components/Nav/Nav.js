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

class Nav extends Component {
    render () {
        return (
            <nav>
                <h2>Traveler</h2>
                <div className="dropdown-icon-container" onClick={() => this.props.toggleDropdown(!this.props.dropdown)}>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                </div>
                {this.props.dropdown && <Dropdown/>}
            </nav>
        )
    }
}

Nav = connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav)

export default Nav

  