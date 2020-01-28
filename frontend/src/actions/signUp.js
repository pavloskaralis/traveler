import axios from 'axios'
import setUsername from './setUsername.js'
import toggleError from './toggleError.js'
import toggleLogin from './toggleLogin.js';
import toggleDropdown from './toggleDropdown.js';
import toggleForm from './toggleForm.js';



export default function signUp(username, password) {
    return dispatch => {
        axios.post('http://localhost:3001/users', {
            username: username,
            password: password
        }).then(({data}) => {
            localStorage.setItem("token", data.jwt)
            dispatch(toggleLogin(true));
            dispatch(setUsername(username));
            dispatch(toggleError(''));
            dispatch(toggleDropdown(false));
            dispatch(toggleForm(''));
        }).catch(err => {
            dispatch(toggleError('Username Already Taken.'));
        })
    }
}


