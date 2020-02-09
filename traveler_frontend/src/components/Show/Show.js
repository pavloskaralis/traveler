import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import history from '../../history.js'
import './Show.css'
import toggleDropdown from '../../actions/toggleDropdown.js'
import getItinerary from '../../actions/getItinerary.js'
import selectItinerary from '../../actions/selectItinerary.js'
import Tools from '../Tools/Tools.js'
import Row from '../Row/Row.js'
import Form from '../Form/Form.js'


const mapStateToProps = state => {
    return {
      dropdown: state.dropdown,
      form: state.form,
      userID: state.userID,
      itinerary: state.itinerary,
      tableIndex: state.tableIndex
    }
}

const mapDispatchToProps = {
    getItinerary
}

function Show({dropdown, toggleDropdown, form, getItinerary, userID, itinerary, tableIndex}) {
    //pass userID to ensure user is associated with itineraryID in url param
    useEffect(()=> {
        getItinerary(userID);
    },[])

    return (
        <div className='show-container' onClick={()=> {if(dropdown)toggleDropdown(false)}}>
            {form && <Form page='show'/>}
            <Tools page='show'/>
            <div className='table'>
                <div className='tr' id='top'>
                    <div className='th' id='orange'>Activity</div>
                    <div className='th'>Type</div>
                    <div className='th'>Address</div>
                    <div className='th'>Website</div>
                    <div className='th'>Interest</div>
                    <div className='th'>Schedule</div>
                </div>
                {/* render planning rows */}
                {itinerary && tableIndex === 0 && itinerary.planning_rows.map(planningRow => {
                    return (
                        <Row type='planning' key={planningRow.id}/>
                    )
                })}
                {/* render scheduling rows */}
                {itinerary && tableIndex > 0 && itinerary.scheduling_rows.map(schedulingRow => {
                    return (
                        // only render matching dates
                        itinerary.dates[tableIndex] === schedulingRow.date && <Row type='' key={schedulingRow.id}/>
                    )
                })}
            </div>
        </div>
    )
}

Show = connect(
    mapStateToProps,
    mapDispatchToProps
)(Show)

export default Show

  