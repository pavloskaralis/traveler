import axios from 'axios'
import history from '../history.js'
import selectItinerary from './selectItinerary.js'

export default function getItinerary(userID) {
    return dispatch => {
        const splitUrl = window.location.href.split('/');
        const userIDParam = splitUrl[splitUrl.length - 2];
        const itineraryID = splitUrl[splitUrl.length - 1];

        const getRequest = async() => {
            const result = await axios.get(`http://localhost:3001/users/${userIDParam}/itineraries/${itineraryID}`) 
            const {data} = result;  
            if(!data.error){
                // history.push(`/${data.location}`, null);
               //makes url prettier 
               dispatch(selectItinerary(data));
            } else {               
                history.push('/');
            }  
        }
        //prevent a user from accessing another user's itinerary
        userID == userIDParam? getRequest() : history.push('/'); 
    }
}