import React from 'react'
import { connect } from 'react-redux'
import './Button.css'
import toggleForm from '../../actions/toggleForm.js';

const mapDispatchToProps = {
    toggleForm
}

function Button({text, toggleForm}) {
    const onClick = text === 'back' ? null : ()=> toggleForm(text);
    return (
        <div className='button' onClick={onClick}>{text}</div>
    )
}

Button = connect(
    null,
    mapDispatchToProps
)(Button)

export default Button

  