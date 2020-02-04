import React, { Component } from 'react'
import history from '../../history'
import axios from 'axios'
import './Itinerary.css'

function Itinerary({itinerary}) {
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
                <div className='edit'></div>
            </div>
        </a>
    )
}

export default Itinerary

  