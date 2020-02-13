import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ActionCable from 'actioncable'
import toggleDropdown from '../../actions/toggleDropdown.js'
import './Index.css'
import Tools from '../Tools/Tools.js'
import Itinerary from '../Itinerary/Itinerary.js'
import Form from '../Form/Form.js'
import swapItinerary from '../../actions/swapItinerary.js';

const mapStateToProps = state => {
    return {
      dropdown: state.dropdown,
      itineraries: state.itineraries,
      filter: state.filter,
      form: state.form
    }
}

const mapDispatchToProps = {
    toggleDropdown,
    swapItinerary
}

function Index({dropdown, toggleDropdown, itineraries, filter, form, swapItinerary}) {

    // real time update
    const handleReceive = ( response ) => {
        console.log("response", response)
        // console.log("itineraries.find(itinerary => itinerary.id === response.id)", itineraries.find(itinerary => itinerary.id === response.id))
        const original = itineraries.find(itinerary => itinerary.id === response.id);
        console.log("original", original)
        // console.log(original.dates)
        // created_at and updated_at ignored
        if (original) {
            if (response.dates !== original.dates || response.location !== original.location || response.shared !== original.shared) {
                swapItinerary(response,itineraries.findIndex(itinerary => itinerary.id === response.id))
            }
        }  
    }
    const cable = ActionCable.createConsumer('ws://localhost:3001/cable')
    const [sub, updateSub] = useState(cable.subscriptions.create('ItinerariesChannel', {received: handleReceive}))

   

    //filter itinerary by search bar query
    if(filter) itineraries = itineraries.filter(itinerary => itinerary.location.toLowerCase() === filter.toLowerCase());

    return (
        <div className='index-container' onClick={()=> {if(dropdown)toggleDropdown(false)}}>
            {form && <Form page='index'/>}
            <Tools page='index'/>
            <div className='itineraries-container'>
                {/* empty page state conditionals */}
                {itineraries.length === 0 && !filter && 
                    <div className='empty-container'>
                        <div className='empty'>You Have No Itineraries</div>
                    </div>
                }
                {itineraries.length === 0 && filter && 
                    <div className='empty-container'>
                        <div className='empty'>No Matching Itineraries</div>
                    </div>
                }
                {/* index is passed multiple times to swap updated index with outdate version is state */}
                {itineraries.map((itinerary,index) => <Itinerary itinerary={itinerary} index={index} key={itinerary.id}s/>)}
            </div>
        </div>
    )
}

Index = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)

export default Index

  