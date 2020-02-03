import React, { Component } from 'react'
import { connect } from 'react-redux'
import toggleDropdown from '../../actions/toggleDropdown.js'
import './Index.css'
import Tools from '../Tools/Tools.js'
import Itinerary from '../Itinerary/Itinerary.js'

const mapStateToProps = state => {
    return {
      dropdown: state.dropdown,
      itineraries: state.itineraries
    }
}

const mapDispatchToProps = {
    toggleDropdown
}

function Index({dropdown, toggleDropdown, itineraries}) {

    return (
        <div className='index-container' onClick={()=> {if(dropdown)toggleDropdown(false)}}>
            <Tools page='index'/>
            <div className='itineraries-container'>
                {itineraries.map(itinerary => <Itinerary itinerary={itinerary} key={itinerary.id}/>)}
            </div>
        </div>
    )
}

Index = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)

export default Index

  