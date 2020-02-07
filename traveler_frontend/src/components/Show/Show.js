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
                <tr>
                    <th id='orange'>Activity</th>
                    <th>Type</th>
                    <th>Address</th>
                    <th>Website</th>
                    <th>Interest</th>
                    <th>Schedule</th>
                </tr>
                <tr>
                    <TextareaAutosize rowsMax={100}></TextareaAutosize>
                    <TextareaAutosize rowsMax={100}></TextareaAutosize>
                    <TextareaAutosize rowsMax={100}></TextareaAutosize>
                    <TextareaAutosize rowsMax={100}></TextareaAutosize>
                    <TextareaAutosize rowsMax={100}></TextareaAutosize>
                    <TextareaAutosize rowsMax={100}></TextareaAutosize>
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

  