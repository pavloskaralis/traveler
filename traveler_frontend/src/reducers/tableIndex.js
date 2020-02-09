export default function tableIndex(state=0, action) {
    switch (action.type) {
        case 'TOGGLE_TABLE': 
            return action.index
        default: 
            return state
    }
}