import { combineReducers } from 'redux'
import isLoggedIn from './isLoggedIn.js'
import username from './username.js'
import form from './form.js'
import dropdown from './dropdown.js'
import error from './error.js'

const traveler = combineReducers({
    isLoggedIn,
    username,
    form,
    dropdown,
    error
})

export default traveler