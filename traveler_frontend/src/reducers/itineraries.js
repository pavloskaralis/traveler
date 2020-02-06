export default function username(state = [], action) {
    switch (action.type) {
        case 'SET_ITINERARIES':
            return action.itineraries.sort((a, b)=> b.id - a.id);
        case 'ADD_ITINERARY':
            return [action.itinerary, ...state]
        case 'SWAP_ITINERARY': 
            // sort itineraries by newest to oldest
            return [...state.slice(0,action.index),action.itinerary,...state.slice(action.index + 1)]
        default:
            return state
    }
}