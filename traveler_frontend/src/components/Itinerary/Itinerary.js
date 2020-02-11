import React from 'react'
import { connect } from 'react-redux'
import toggleForm from '../../actions/toggleForm.js'
import selectItinerary from '../../actions/selectItinerary.js'
import './Itinerary.css'

const mapStateToProps = state => {
    return {
      userID: state.userID
    }
}
const mapDispatchToProps = {
    toggleForm,
    selectItinerary
}

function Itinerary({itinerary, toggleForm, selectItinerary, index, userID}) {
    const length = itinerary.dates.length
    //prevent x-overscroll of long location names
    if(itinerary.location.length > 8) itinerary.location = itinerary.location.slice(0,6) + '...';
    return (
        <a className='itinerary' href={`/${userID}/${itinerary.id}`}>
            <div className='location'>{itinerary.location}</div>
            {itinerary.shared ? 
                <div className='shared'></div> :
                <div className='unshared'></div>
            }
            <div className='date'>{itinerary.dates[0]}</div>
            <div className='date'>{itinerary.dates[length - 1]}</div>
            <div className='edit-container'>
                {/* selectItinerary allows form to access specific itinerary through state */}
                <div className='edit' onClick={e => {e.stopPropagations(); selectItinerary({...itinerary, index: index});toggleForm('update')}}></div>
            </div>
        </a>
    )
}

Itinerary = connect(
    mapStateToProps,
    mapDispatchToProps
)(Itinerary)

export default Itinerary

  