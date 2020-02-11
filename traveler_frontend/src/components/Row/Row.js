import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { TextareaAutosize } from '@material-ui/core'
import './Row.css'

const mapStateToProps = state => {
    return {
      userID: state.userID
    }
}

const mapDispatchToProps = {
}


function Row({rowType, row, userID}) {
    //textarea cannot use ref; must rely on state values for storage
    const [activity, updateActivity] = useState(row.activity);
    const [type, updateType] = useState(row.category);
    const [address, updateAddress] = useState(row.address);
    const [website, updateWebsite] = useState(row.website);
    // planning row only
    const [interest, updateInterest] = useState(row.interest);
    // scheduling row only
    const [time, updateTime] = useState(row.time);

    //dispatch not required since state automatically renders changes 
    const putRequest = (interestParam) => {
        axios.put(`http://localhost:3001/planning_rows/${row.id}`, {
            activity: document.querySelector(`#activity${row.id}`).value,
            category: document.querySelector(`#type${row.id}`).value,
            address: document.querySelector(`#address${row.id}`).value,
            website: document.querySelector(`#website${row.id}`).value,
            interest: JSON.stringify(interestParam)
        }).catch(error => console.log(error));
    }

    //onClick for interest button
    const toggleInterest = () => {
        let updatedInterest = interest.indexOf(userID) === -1 ? 
            [...interest,userID] : [...interest.slice(0,interest.indexOf(userID)),...interest.slice(interest.indexOf(userID) + 1)];
        updateInterest(updatedInterest)
        //must use document.query instead of state, as there is a delay in update
        putRequest(updatedInterest);

        console.log(interest.indexOf(userID))

    }

    //handles input value change
    const handlePlanningChange = (e) => {
        switch(e.target.id){
            case `activity${row.id}`: updateActivity(e.target.value);
                break;
            case `type${row.id}`: updateType(e.target.value);
                break;
            case `address${row.id}`:updateAddress(e.target.value);
                break;
            case `website${row.id}`:updateWebsite(e.target.value);
                break;
        }

        //must use document.query instead of state, as there is a delay in update
        putRequest(interest);
    }
    

    return (
        <>
            {/* planning row */}
            {rowType === 'planning' && <div id={row.id}className='row-container'>
                <TextareaAutosize onChange={handlePlanningChange} value={activity} className='first' id={`activity${row.id}`}> </TextareaAutosize>
                <TextareaAutosize onChange={handlePlanningChange} value={type} id={`type${row.id}`}></TextareaAutosize>
                <TextareaAutosize onChange={handlePlanningChange} value={address} id={`address${row.id}`}></TextareaAutosize>
                <TextareaAutosize onChange={handlePlanningChange} value={website} id={`website${row.id}`}></TextareaAutosize>
                <div className='interest-container'>
                    <div className='interest'>{interest.length}</div>
                    <div className={interest.indexOf(userID) === -1 ? 'interest-button' : 'interest-button-subtract'} onClick={toggleInterest} id='interest'></div>
                </div>
                <div className='schedule-container'>
                    <div className='schedule'></div>
                </div>
            </div>}
            {/* scheduling row */}
            {rowType === 'scheduling' && <div id={row.id}className='row-container'>
                <div className='interest-container'>
                    <div className='interest'>Time</div>
                </div>
                <TextareaAutosize onChange={handlePlanningChange} value={activity} className='first' id={`activity${row.id}`}> </TextareaAutosize>
                <TextareaAutosize onChange={handlePlanningChange} value={time} id={`time${row.id}`}></TextareaAutosize>
                <TextareaAutosize onChange={handlePlanningChange} value={address} id={`address${row.id}`}></TextareaAutosize>
                <TextareaAutosize onChange={handlePlanningChange} value={website} id={`website${row.id}`}></TextareaAutosize>
                <div className='schedule-container'>
                    <div className='schedule'></div>
                </div>
            </div>}
        </>
    )
}

Row = connect(
    mapStateToProps,
    mapDispatchToProps
)(Row)

export default Row

  