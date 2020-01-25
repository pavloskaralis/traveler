import history from '../history.js'
import setUsername from './setUsername.js'
import toggleLogin from './toggleLogin.js'
import toggleDropdown from './toggleDropdown.js'

export default function logOut() {
    return dispatch => {
        localStorage.clear();
        dispatch(toggleLogin(false));
        dispatch(setUsername(''));
        dispatch(toggleDropdown(false));
        history.push('/');
    }
}


