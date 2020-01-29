import React, { Component } from 'react'
import history from '../../history'
import axios from 'axios'
import './Index.css'
import Tools from '../Tools/Tools.js'

class Index extends Component {
    render () {
        return (
            <div className='index-container'>
                <Tools/>
               
            </div>
        )
    }
}

export default Index

  