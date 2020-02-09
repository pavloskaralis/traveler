import React from 'react'
import { connect } from 'react-redux'
import history from '../../history.js'
import { TextareaAutosize } from '@material-ui/core'
import './Row.css'

const mapDispatchToProps = {
}


function Row({type, row, id}) {
    return (
        <div className='row-container' id={id}>
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
        </div>
    )
}

Row = connect(
    null,
    mapDispatchToProps
)(Row)

export default Row

  