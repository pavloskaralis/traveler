import axios from 'axios'
import setUserID from './setUserID.js'
import toggleError from './toggleError.js'
import toggleLogin from './toggleLogin.js';
import toggleDropdown from './toggleDropdown.js';
import toggleForm from './toggleForm.js';



export default function signUp(username, password) {
    return dispatch => {
        const newUser = {
            username: username,
            password: password
        }
        axios.post('http://localhost:3001/users', newUser)
            .then(({data}) => {
                if (!data.error) {
                    localStorage.setItem("token", data.jwt)
                    dispatch(toggleLogin(true));
                    dispatch(setUserID(data.id));
                    dispatch(toggleError(''));
                    dispatch(toggleDropdown(false));
                    dispatch(toggleForm(''));
                } else {
                    dispatch(toggleError('Username Already Taken.'));
                }
        })
    }
}


