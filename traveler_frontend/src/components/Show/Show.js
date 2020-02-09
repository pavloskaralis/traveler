import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import history from '../../history.js'
import './Show.css'
import getItinerary from '../../actions/getItinerary.js'
import postPlanning from '../../actions/postPlanning.js'
import postScheduling from '../../actions/postScheduling.js'
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
    postPlanning,
    postScheduling
}

function Show({dropdown, toggleDropdown, form, getItinerary, postPlanning, postScheduling, userID, itinerary, tableIndex}) {
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
                    <div className='th' id='orange'>Activity</div>
                    <div className='th'>Type</div>
                    <div className='th'>Address</div>
                    <div className='th'>Website</div>
                    <div className='th'>Interest</div>
                    <div className='th'>Schedule</div>
                </div>
                <div className='body'>
                    {/* render planning rows */}
                    {itinerary && tableIndex === 0 && itinerary.planning_rows.map(planningRow => {
                        return (
                            <Row type='planning' id={planningRow.id} key={planningRow.id}/>
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
                {/* create scheduling or planning row based on table */}
                <div className='add-row' onClick={tableIndex !== 0 && itinerary ? ()=> postScheduling() : ()=> {postPlanning(itinerary.id); autoScroll();}}></div>
            </div>
        </div>
    )
}

Show = connect(
    mapStateToProps,
    mapDispatchToProps
)(Show)

export default Show

  