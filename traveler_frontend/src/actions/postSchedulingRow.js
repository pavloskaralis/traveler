import axios from 'axios'
import addSchedulingRow from './addSchedulingRow.js';
import toggleForm from './toggleForm.js'

export default function postSchedulingRow(itineraryID, date, time = '') {

    return dispatch => {

        const schedulingRow = {date: date, time: time}

        const postRequest = async () => {
            const result = await axios.post(`http://localhost:3001/itineraries/${itineraryID}/scheduling_rows`, schedulingRow);
            const {data} = result;
            if (!data.error) {
                console.log('read this!!!!', data.scheduling_row)
                dispatch(addSchedulingRow(data.scheduling_row));
                dispatch(toggleForm(''));
            } else {
                console.log('Failed To Create')
            }
        }
        postRequest();
    }
}


