import React from 'react'
import { connect } from 'react-redux'
import './Show.css'
import { TextareaAutosize } from '@material-ui/core'
import toggleDropdown from '../../actions/toggleDropdown.js'
import Tools from '../Tools/Tools.js'
import Form from '../Form/Form.js'

const mapStateToProps = state => {
    return {
      dropdown: state.dropdown,
      form: state.form
    }
}

const mapDispatchToProps = {
    toggleDropdown
}

function Show({dropdown, toggleDropdown, form}) {

    return (
        <div className='show-container' onClick={()=> {if(dropdown)toggleDropdown(false)}}>

            {form && <Form page='show'/>}
            <Tools page='show'/>
            <table>
                <tr id='top'>
                    <th id='orange'>Activity</th>
                    <th>Type</th>
                    <th>Address</th>
                    <th>Website</th>
                    <th>Interest</th>
                    <th>Schedule</th>
                </tr>
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
            </table>
        </div>
    )
}

Show = connect(
    mapStateToProps,
    mapDispatchToProps
)(Show)

export default Show

  