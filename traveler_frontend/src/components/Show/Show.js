import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import './Show.css'
import toggleDropdown from '../../actions/toggleDropdown.js'
import getItinerary from '../../actions/getItinerary.js'
import Tools from '../Tools/Tools.js'
import Row from '../Row/Row.js'
import Form from '../Form/Form.js'

const mapStateToProps = state => {
    return {
      dropdown: state.dropdown,
      form: state.form,
      userID: state.userID
    }
}

const mapDispatchToProps = {
    getItinerary
}

function Show({dropdown, toggleDropdown, form, getItinerary, userID}) {
    //pass userID to ensure user is associated with itineraryID in url param
    useEffect(()=> getItinerary(userID),[])
    return (
        <div className='show-container' onClick={()=> {if(dropdown)toggleDropdown(false)}}>

            {form && <Form page='show'/>}
            <Tools page='show'/>
            <table>
                <tbody>
                    <tr id='top'>
                        <th id='orange'>Activity</th>
                        <th>Type</th>
                        <th>Address</th>
                        <th>Website</th>
                        <th>Interest</th>
                        <th>Schedule</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

Show = connect(
    mapStateToProps,
    mapDispatchToProps
)(Show)

export default Show

  