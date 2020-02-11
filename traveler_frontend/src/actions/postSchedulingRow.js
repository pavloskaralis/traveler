import axios from 'axios'
import addSchedulingRow from './addSchedulingRow.js';

export default function postSchedulingRow(itineraryID, date) {
    return dispatch => {
        const schedulingRow = {date: date}
        const postRequest = async () => {
            const result = await axios.post(`http://localhost:3001/itineraries/${itineraryID}/scheduling_rows`, schedulingRow);
            const {data} = result;
            if (!data.error) {
                console.log('read this!!!!', data.scheduling_row)
                dispatch(addSchedulingRow(data.scheduling_row));
            } else {
                console.log('Failed To Create')
            }
        }
        postRequest();
    }
}


