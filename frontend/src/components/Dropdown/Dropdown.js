import React, { Component } from 'react'
import logOut from '../../actions/logOut.js'
import { connect } from 'react-redux'
import toggleForm from '../../actions/toggleForm.js'
import './Dropdown.css'

const mapStateToProps = state => {
    return { isLoggedIn: state.isLoggedIn}
}

const mapDispatchToProps = {
    logOut,
    toggleForm
}

class Dropdown extends Component {
    render () {
        return (
            <div className='dropdown-menu'>
                {this.props.isLoggedIn ? 
                    <React.Fragment>
                        <a href='/'>itineraries</a>
                        <a href='/' onClick={this.props.logOut}>log out</a>
                    </React.Fragment> : 
                    <React.Fragment>
                        <a onClick={()=> this.props.toggleForm('signup')}>sign up</a>
                        <a onClick={()=> this.props.toggleForm('login')}>login</a>
                    </React.Fragment>}
            </div>
        )
    }
}

Dropdown = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dropdown)

export default Dropdown

  