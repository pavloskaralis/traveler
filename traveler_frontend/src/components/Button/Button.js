import React from 'react'
import { connect } from 'react-redux'
import history from '../../history.js'
import './Button.css'
import toggleForm from '../../actions/toggleForm.js';

const mapDispatchToProps = {
    toggleForm
}


function Button({type, toggleForm}) {
     // all buttons except back toggle form
    const onClick = type === 'return' ? ()=> history.push('/') : ()=> toggleForm(type);
    return (
        <div className='button' id={type} onClick={onClick}></div>
    )
}

Button = connect(
    null,
    mapDispatchToProps
)(Button)

export default Button

  