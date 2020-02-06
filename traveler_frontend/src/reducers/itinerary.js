export default function username(state = 'test', action) {
    switch (action.type) {
        case 'SELECT_ITINERARY':
            return action.itinerary
        default:
            return state
    }
}