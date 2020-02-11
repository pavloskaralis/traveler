export default function itinerary(state = '', action) {
    switch (action.type) {
        case 'SELECT_ITINERARY':
            return action.itinerary
        case 'ADD_PLANNING':
            return {...state, planning_rows: [...state.planning_rows,action.planning_row]}
        case 'ADD_SCHEDULING':
            return {...state, scheduling_rows: [...state.scheduling_rows,action.scheduling_row]}
        default:
            return state
    }
}