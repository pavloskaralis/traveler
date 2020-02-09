import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { TextareaAutosize } from '@material-ui/core'
import putPlanningRow from '../../actions/putPlanningRow.js'
import './Row.css'

const mapStateToProps = state => {
    return {
      userID: state.userID
    }
}

const mapDispatchToProps = {
    putPlanningRow
}


function Row({rowType, dates, planningRow, putPlanningRow, userID}) {

    const [activity, updateActivity] = useState(planningRow.activity);
    const [type, updateType] = useState(planningRow.category);
    const [address, updateAddress] = useState(planningRow.address);
    const [website, updateWebsite] = useState(planningRow.website);
    const [interest, updateInterest] = useState(planningRow.interest);


    const handleInterest = () => {
        let updatedInterest = interest.indexOf(userID) === -1 ? 
            [...interest,userID] : [...interest.slice(0,interest.indexOf(userID)),...interest.slice(interest.indexOf(userID) + 1)];
        updateInterest(updatedInterest)
        putPlanningRow(planningRow.id, {
            activity: document.querySelector(`#activity${planningRow.id}`).value,
            category: document.querySelector(`#type${planningRow.id}`).value,
            address: document.querySelector(`#address${planningRow.id}`).value,
            website: document.querySelector(`#website${planningRow.id}`).value,
            interest: JSON.stringify(updatedInterest)
        });
    }

    const handlePlanningChange = (e) => {
        switch(e.target.id){
            case `activity${planningRow.id}`: updateActivity(e.target.value);
                break;
            case `type${planningRow.id}`: updateType(e.target.value);
                break;
            case `address${planningRow.id}`:updateAddress(e.target.value);
                break;
            case `website${planningRow.id}`:updateWebsite(e.target.value);
                break;
        }

        putPlanningRow(planningRow.id, {
            activity: document.querySelector(`#activity${planningRow.id}`).value,
            category: document.querySelector(`#type${planningRow.id}`).value,
            address: document.querySelector(`#address${planningRow.id}`).value,
            website: document.querySelector(`#website${planningRow.id}`).value,
            interest: JSON.stringify(interest)
        });
    }
    

    return (
        rowType === 'planning' && <div id={planningRow.id}className='row-container'>
            <TextareaAutosize onChange={handlePlanningChange} value={activity} className='first' id={`activity${planningRow.id}`}> </TextareaAutosize>
            <TextareaAutosize onChange={handlePlanningChange} value={type} id={`type${planningRow.id}`}></TextareaAutosize>
            <TextareaAutosize onChange={handlePlanningChange} value={address} id={`address${planningRow.id}`}></TextareaAutosize>
            <TextareaAutosize onChange={handlePlanningChange} value={website} id={`website${planningRow.id}`}></TextareaAutosize>
            <div className='interest-container'>
                <div className='interest'>{interest.length}</div>
                <div className='interest-button' onClick={handleInterest} id='interest'></div>
            </div>
            <div className='schedule-container'>
                <div className='schedule'></div>
            </div>
        </div>
    )
}

Row = connect(
    mapStateToProps,
    mapDispatchToProps
)(Row)

export default Row

  