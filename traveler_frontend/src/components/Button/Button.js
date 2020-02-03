import React, { Component } from 'react'
import history from '../../history'
import axios from 'axios'
import './Button.css'

function Button({text}) {
    return (
        <div className='button'>{text}</div>
    )
}

export default Button

  