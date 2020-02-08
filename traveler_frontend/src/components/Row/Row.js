import React from 'react'
import { connect } from 'react-redux'
import history from '../../history.js'
import { TextareaAutosize } from '@material-ui/core'
import './Row.css'

const mapDispatchToProps = {
}


function Row({type, row}) {
    return (
        <tr>
            <TextareaAutosize id='first'></TextareaAutosize>
            <TextareaAutosize></TextareaAutosize>
            <TextareaAutosize></TextareaAutosize>
            <TextareaAutosize></TextareaAutosize>
            <div className='interest-container'>
                <div className='interest'>0</div>
                <div className='interest-button'></div>
            </div>
            <div className='schedule-container'>
                <div className='schedule'></div>
            </div>
        </tr>
    )
}

Row = connect(
    null,
    mapDispatchToProps
)(Row)

export default Row

  