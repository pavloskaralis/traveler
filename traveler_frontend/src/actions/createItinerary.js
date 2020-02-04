import axios from 'axios'
import toggleForm from './toggleForm.js';



export default function createItinerary(location,depatureDate,returnDate) {
    return dispatch => {
        console.log(location,depatureDate,returnDate)
        // axios.post('http://localhost:3001/users', newUser)
        //     .then(({data}) => {
        //         if (!data.error) {
        //             localStorage.setItem("token", data.jwt)
        //             dispatch(toggleLogin(true));
        //             dispatch(setUserID(data.id));
        //             dispatch(toggleError(''));
        //             dispatch(toggleDropdown(false));
        //             dispatch(toggleForm(''));
        //         } else {
        //             dispatch(toggleError('Username Already Taken.'));
        //         }
        // })
    }
}


