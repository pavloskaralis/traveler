import axios from 'axios'
import history from '../history.js'
import toggleForm from './toggleForm.js'
import removeItinerary from './removeItinerary.js'

export default function deleteItinerary(itineraryID) {
    return dispatch => {
        const deleteRequest = async() => {
            const result = await axios.delete(`http://localhost:3001/itineraries/${itineraryID}`);  
            const {data} = result;  
            if(data.status){
                dispatch(toggleForm(''));
                dispatch(removeItinerary(itineraryID));
                history.push('/');
            } else {               
                console.log('Failed To Delete')
            }  
        }
        deleteRequest();
    }
}


