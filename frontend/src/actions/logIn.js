import axios from 'axios'
import setUsername from './setUsername.js'
import toggleError from './toggleError.js'
import toggleLogin from './toggleLogin.js';
import toggleDropdown from './toggleDropdown.js';
import toggleForm from './toggleForm.js';


export default function signUp(username, password) {
    return dispatch => {
        axios.post('http://localhost:3001/user/login', {
            username: username,
            password: password
        }).then(response => {
            localStorage.token = response.data.token;
                dispatch(toggleLogin(true));
                dispatch(setUsername(username));
                dispatch(toggleError(''));
                dispatch(toggleDropdown(false));
                dispatch(toggleForm(''));
        }).catch(err => {
            dispatch(toggleError('Invalid Username/Password'));
        })
    }
}






   