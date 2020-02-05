import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import toggleDropdown from '../../actions/toggleDropdown.js'
import './Index.css'
import Tools from '../Tools/Tools.js'
import Itinerary from '../Itinerary/Itinerary.js'
import Form from '../Form/Form.js'

const mapStateToProps = state => {
    return {
      dropdown: state.dropdown,
      itineraries: state.itineraries,
      filter: state.filter,
      form: state.form
    }
}

const mapDispatchToProps = {
    toggleDropdown
}

function Index({dropdown, toggleDropdown, itineraries, filter, form}) {

    if(filter) itineraries = itineraries.filter(itinerary => itinerary.location.toLowerCase() === filter.toLowerCase());

    return (
        <div className='index-container' onClick={()=> {if(dropdown)toggleDropdown(false)}}>
            {form && <Form page='index'/>}
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

  