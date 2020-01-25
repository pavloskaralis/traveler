export default function isLoggedIn(state = false, action) {
    switch (action.type) {
        case 'TOGGLE_LOGIN':
            return action.boolean
        default: 
            return state 
    }
}