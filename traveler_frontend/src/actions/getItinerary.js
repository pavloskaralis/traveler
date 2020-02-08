import axios from 'axios'
import history from '../history.js'
import setUserID from './setUserID.js'
import setItineraries from './setItineraries.js'
import selectItinary from './selectItinerary.js'
import toggleLogin from './toggleLogin.js'

export default function getItinerary(userID) {
    return dispatch => {
        const splitUrl = window.location.href.split('/');
        const userIDParam = splitUrl[splitUrl.length - 2];
        const itineraryID = splitUrl[splitUrl.length - 1];

        const getRequest = async() => {
            const result = await axios.get(`http://localhost:3001/users/${userIDParam}/itineraries/${itineraryID}`) 
            const {data} = result;  
            if(!data.error){
                console.log("success1",data)
               selectItinary(data);
            } else {               
                 console.log("fail",data)
                //if user is not associated with itinerary, do not load
                history.push('/');
            }  
        }
        //prevent a user from accessing another user's itinerary
        userID == userIDParam? getRequest() : history.push('/'); 
    }
}