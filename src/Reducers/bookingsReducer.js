const initState = {
    title: '', description: ''
}

const bookingsReducer = ( state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            return state
        case 'CREATE_PROJECT_ERROR':
            return state
        default:
            return state
    }
}

export default bookingsReducer;