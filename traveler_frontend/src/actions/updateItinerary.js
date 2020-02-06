import axios from 'axios'
import toggleError from './toggleError.js'
import toggleForm from './toggleForm.js'
import updateItineraries from './updateItineraries.js';

export default function updateItinerary(location,departureDate,returnDate,userID) {
    return dispatch => {
        //check date format is valid
        const regex = /(20)[2-9]\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/i;
        if(!departureDate.match(regex) || !returnDate.match(regex)){
            return dispatch(toggleError('Invalid Date Format'));
        } 
        //find today's date
        const date = new Date();
        const dd = date.getDate();
        const mm = date.getMonth() + 1;
        const yyyy = date.getFullYear();
        const today = [parseFloat(yyyy), parseFloat(mm), parseFloat(dd)]
        //breakdown depart and return dates 
        const splitDepartureDate = departureDate.split('-');
        const splitReturnDate = returnDate.split('-');
        const parsedDepartureDate = splitDepartureDate.map(num => parseFloat(num));
        const parsedReturnDate = splitReturnDate.map(num => parseFloat(num));
        //check departure date occurs before return date, and on or after current date 
        // [0] = YY; [1] = MM; [2] = DD;
        if((parsedDepartureDate[0] > parsedReturnDate[0]) || (parsedDepartureDate[0] < today[0])) {
            return dispatch(toggleError('Invalid Dates'));
        } else if ((parsedDepartureDate[1] > parsedReturnDate[1]) || (parsedDepartureDate[1] < today[1])) {
            return dispatch(toggleError('Invalid Dates'));
        } else if (((parsedDepartureDate[1] === parsedReturnDate[1]) && (parsedDepartureDate[2] > parsedReturnDate[2])) || (parsedDepartureDate[2] < today[2])) {
            return dispatch(toggleError('Invalid Dates'));
        }
        //make sure range won't break site; 
        // [0] = YY; [1] = YY; [2] = DD;
        if((parsedDepartureDate[0] < parsedReturnDate[0]) && ((parsedDepartureDate[0] + 1) < parsedReturnDate[0])) {
            return dispatch(toggleError('60 Day Limit'));
        } else if ((parsedDepartureDate[0] === parsedReturnDate[0]) && ((parsedDepartureDate[1] + 4) < parsedReturnDate[1])) {
            return dispatch(toggleError('60 Day Limit'));
        }
        //create array of dates
        const dates = [];
        const endDate = new Date(returnDate); 
        let nextDate = new Date(departureDate);
        while (nextDate <= endDate) {
            const dd = nextDate.getDate() + 1;
            const mm = nextDate.getMonth() + 1;
            const yyyy = nextDate.getFullYear();
            let day = [mm, dd, yyyy];
            if(day[0] < 10) day[0] = '0'+ day[0];
            if(day[1] < 10) day[1] = '0'+ day[1];
            day[2] = day[2].toString().split('').slice(2).join('');
            dates.push(day[0] + '.' + day[1] + '.' + day[2]);
            nextDate.setDate(nextDate.getDate() + 1);
        }
        //easier 60 day limit check
        if(dates.length > 60) return dispatch(toggleError('60 Day Limit'));
        //post request
        const newItinerary = {
            location: location,
            dates:  JSON.stringify(dates),
            shared: false
        }
        const postRequest = async () => {
            const result = await axios.post(`http://localhost:3001/users/${userID}/itineraries`, newItinerary);
            const {data} = result;
            if (!data.error) {
                dispatch(toggleError(''));
                dispatch(toggleForm(''));
                const newDate = JSON.parse(newItinerary.dates)
                dispatch(updateItineraries({...newItinerary, dates: newDate, id: data.id}))
            } else {
                dispatch(toggleError('Failed To Save'));
            }
        }
        postRequest();
    }
}


