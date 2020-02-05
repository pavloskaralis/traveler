import React from 'react'
import { connect } from 'react-redux'
import toggleForm from '../../actions/toggleForm.js'
import './Itinerary.css'

const mapDispatchToProps = {
    toggleForm
}

function Itinerary({itinerary, toggleForm}) {
    const length = itinerary.dates.length
    if(itinerary.location.length > 10) itinerary.location = itinerary.location.slice(0,) + '...';
    return (
        <a className='itinerary'>
            <div className='location'>{itinerary.location}</div>
            {itinerary.shared ? 
                <div className='shared'></div> :
                <div className='unshared'></div>
            }
            <div className='date'>{itinerary.dates[0]}</div>
            <div className='date'>{itinerary.dates[length - 1]}</div>
            <div className='edit-container'>
                <div className='edit' onClick={()=> toggleForm('edit')}></div>
            </div>
        </a>
    )
}

Itinerary = connect(
    null,
    mapDispatchToProps
)(Itinerary)

export default Itinerary

  