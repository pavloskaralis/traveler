import axios from 'axios'
import setUserID from './setUserID.js'
import setItineraries from './setItineraries.js'
import toggleLogin from './toggleLogin.js'


export default function userSetup() {
    return dispatch => {
        const getRequest = async() => {
            const result = await axios.get('http://localhost:3001/auto_login', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }) 
            const {data} = result;  
            if(!data.error){
                dispatch(toggleLogin(true));
                dispatch(setUserID(data.id));
                dispatch(setItineraries(data.itineraries))
            } else {
                dispatch(toggleLogin(false));
            }  
        }
        
        const token = localStorage.getItem("token");
        if(token) {
            getRequest();
        } else {
            dispatch(toggleLogin(false));
        }
    }
}