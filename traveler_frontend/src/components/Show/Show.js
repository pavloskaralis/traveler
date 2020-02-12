import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import history from '../../history.js'
import './Show.css'
import getItinerary from '../../actions/getItinerary.js'
import postPlanningRow from '../../actions/postPlanningRow.js'
import postSchedulingRow from '../../actions/postSchedulingRow.js'
import toggleDropdown from '../../actions/toggleDropdown.js'
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
    getItinerary,
    postPlanningRow,
    postSchedulingRow,
    toggleDropdown
}

function Show({dropdown, toggleDropdown, form, getItinerary, postPlanningRow, postSchedulingRow, userID, itinerary, tableIndex}) {
    //pass userID to ensure user is associated with itineraryID in url param
    useEffect(()=> {
        getItinerary(userID);
    },[])
    // auto scroll to bottom on row creation; passed to add-row onClick
    const autoScroll = () => setTimeout(()=>document.querySelector('.body').scrollTop = document.querySelector('.body').scrollHeight, 100);
    return (
        <div className='show-container' onClick={()=> {if(dropdown)toggleDropdown(false)}}>
            {form && <Form page='show'/>}
            <Tools page='show'/>
                <div className='table'>
                <div className='head'>
                    <div className='th' id='orange'>{tableIndex === 0 ? 'Activity' : 'Time'}</div>
                    <div className='th'>{tableIndex === 0 ? 'Type' : 'Activity'}</div>
                    <div className='th'>{tableIndex === 0 ? 'Address' : 'Type'}</div>
                    <div className='th'>{tableIndex === 0 ? 'Website' : 'Address'}</div>
                    <div className='th'>{tableIndex === 0 ? 'Interest' : 'Website'}</div>
                    <div className='th'>{tableIndex === 0 ? 'Schedule' : 'Cancel'}</div>
                </div>
                <div className='body'>
                    {/* render planning rows */}
                    {itinerary.planning_rows && tableIndex === 0 && itinerary.planning_rows.sort((a,b) => a.id - b.id).map(planningRow => {
                        return (
                            <Row rowType='planning' row={planningRow}  key={planningRow.id}/>
                        )
                    })}
                    {/* render scheduling rows */}
                    {itinerary.scheduling_rows && (tableIndex > 0) && itinerary.scheduling_rows.map(schedulingRow => {
                        return (
                            // only render matching dates
                            (itinerary.dates[tableIndex] === schedulingRow.date) && <Row rowType='scheduling' row={schedulingRow} key={schedulingRow.id}/>
                        )
                    })}
                </div>
                {/* create scheduling or planning row based on table */}
                <div className='add-row' onClick={tableIndex !== 0 ? ()=> postSchedulingRow(itinerary.id, itinerary.dates[tableIndex]) : ()=> {postPlanningRow(itinerary.id); autoScroll();}}></div>
            </div>
        </div>
    )
}

Show = connect(
    mapStateToProps,
    mapDispatchToProps
)(Show)

export default Show

  