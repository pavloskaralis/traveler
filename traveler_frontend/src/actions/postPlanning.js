import axios from 'axios'
import toggleError from './toggleError.js'
import addPlanningRow from './addPlanningRow.js';

export default function postPlanning(itineraryID) {
    return dispatch => {
        const postRequest = async () => {
            const result = await axios.post(`http://localhost:3001/itineraries/${itineraryID}/planning_rows`,{});
            const {data} = result;
            if (!data.error) {
                dispatch(addPlanningRow(data.planning_row));
            } else {
                console.log('Failed To Create')
            }
        }
        postRequest();
    }
}


