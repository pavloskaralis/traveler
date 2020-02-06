import React from 'react'
import { connect } from 'react-redux'
import toggleForm from '../../actions/toggleForm.js'
import selectItinerary from '../../actions/selectItinerary.js'
import './Itinerary.css'


const mapDispatchToProps = {
    toggleForm,
    selectItinerary
}

function Itinerary({itinerary, toggleForm, selectItinerary, index}) {
    const length = itinerary.dates.length
    if(itinerary.location.length > 10) itinerary.location = itinerary.location.slice(0,) + '...';
    return (
        <a className='itinerary' href={`/${itinerary.id}`}>
            <div className='location'>{itinerary.location}</div>
            {itinerary.shared ? 
                <div className='shared'></div> :
                <div className='unshared'></div>
            }
            <div className='date'>{itinerary.dates[0]}</div>
            <div className='date'>{itinerary.dates[length - 1]}</div>
            <div className='edit-container'>
                <div className='edit' onClick={e => {e.preventDefault(); selectItinerary({...itinerary, index: index});toggleForm('update')}}></div>
            </div>
        </a>
    )
}

Itinerary = connect(
    null,
    mapDispatchToProps
)(Itinerary)

export default Itinerary

  