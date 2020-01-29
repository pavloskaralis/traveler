export default function username(state = [], action) {
    switch (action.type) {
        case 'SET_ITINERARIES':
            return action.itineraries
        default:
            return state
    }
}