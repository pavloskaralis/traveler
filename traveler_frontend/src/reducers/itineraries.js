export default function username(state = [], action) {
    switch (action.type) {
        case 'SET_ITINERARIES':
            return action.itineraries
        case 'UPDATE_ITINERARIES':
            return [...state, action.itinerary]
        default:
            return state
    }
}