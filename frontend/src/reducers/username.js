export default function username(state = '', action) {
    switch (action.type) {
        case 'SET_USERNAME':
            return action.username
        default:
            return state
    }
}