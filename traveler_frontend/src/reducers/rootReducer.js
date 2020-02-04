import { combineReducers } from 'redux'
import isLoggedIn from './isLoggedIn.js'
import userID from './userID.js'
import itineraries from './itineraries.js'
import form from './form.js'
import dropdown from './dropdown.js'
import error from './error.js'
import filter from './filter.js'

const traveler = combineReducers({
    isLoggedIn,
    userID,
    itineraries,
    form,
    dropdown,
    error,
    filter
})

export default traveler