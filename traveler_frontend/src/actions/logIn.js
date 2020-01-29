import axios from 'axios'
import setUserID from './setUserID.js'
import setItineraries from './setItineraries.js'
import toggleError from './toggleError.js'
import toggleLogin from './toggleLogin.js';
import toggleDropdown from './toggleDropdown.js';
import toggleForm from './toggleForm.js';


export default function logIn(username, password) {
    return dispatch => {
        axios.post('http://localhost:3001/login', {
            username: username,
            password: password
        }).then(({data}) => {
            if(!data.error) {
                localStorage.setItem("token", data.jwt)
                dispatch(toggleLogin(true));
                dispatch(setUserID(data.id));
                dispatch(setItineraries(data.itineraries))
                dispatch(toggleError(''));
                dispatch(toggleDropdown(false));
                dispatch(toggleForm(''));
            } else {
                dispatch(toggleError('Invalid Username/Password'));
            }
        })
    }
}






   