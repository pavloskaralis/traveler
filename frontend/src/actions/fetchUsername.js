import axios from 'axios'
import setUsername from './setUsername.js'
import toggleLogin from './toggleLogin.js'
import toggleDropdown from './toggleDropdown.js'


export default function fetchUsername() {
    return dispatch => {
        const token = localStorage.getItem("token");
        if(token) {
            axios.get('http://localhost:3001/auto_login', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(({data}) => {
                dispatch(setUsername(data.username));
                dispatch(toggleLogin(true));
                dispatch(toggleDropdown(false));
            }); 
        } else {
            dispatch(toggleLogin(false));
        }
    }
}