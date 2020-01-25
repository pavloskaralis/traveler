import axios from 'axios'
import setUsername from './setUsername.js'
import toggleLogin from './toggleLogin.js'
import toggleDropdown from './toggleDropdown.js'


export default function fetchUsername() {
    return dispatch => {
        if(localStorage.token) {
            axios.get('http://localhost:3001/user/verify/' + localStorage.token)
            .then(response => {
                dispatch(setUsername(response.data.username));
                dispatch(toggleLogin(true));
                dispatch(toggleDropdown(false));
            }); 
        } else {
            dispatch(toggleLogin(false));
        }
    }
}