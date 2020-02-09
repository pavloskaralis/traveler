import axios from 'axios'
import toggleError from './toggleError.js'
import addPlanningRow from './addPlanningRow.js';

export default function putPlanning(planningRowID, updatedPlanningRow) {
    return dispatch => {
        const putRequest = async () => {
            const result = await axios.put(`http://localhost:3001/planning_rows/${planningRowID}`,updatedPlanningRow);
            const {data} = result;
            if (!data.error) {
                // alert('works')
                console.log('works')
                // dispatch(addPlanningRow(data.planning_row));
            } else {
                alert('failed')
                console.log('Failed To Create')
            }
        }
        putRequest();
    }
}


