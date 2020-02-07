import React from 'react'
import { connect } from 'react-redux'
import './Show.css'
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
        </div>
    )
}

Show = connect(
    mapStateToProps,
    mapDispatchToProps
)(Show)

export default Show

  