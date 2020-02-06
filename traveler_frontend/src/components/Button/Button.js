import React from 'react'
import { connect } from 'react-redux'
import './Button.css'
import toggleForm from '../../actions/toggleForm.js';

const mapDispatchToProps = {
    toggleForm
}

function Button({type, toggleForm}) {
    // all buttons except back toggle form
    const onClick = type === 'back' ? null : ()=> toggleForm(type);
    return (
        <div className='button' onClick={onClick}>{type}</div>
    )
}

Button = connect(
    null,
    mapDispatchToProps
)(Button)

export default Button

  