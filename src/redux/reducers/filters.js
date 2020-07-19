

const initialState = {
    category: 0,
    sotrBy: 'popular'
}


const filters = (state = initialState, action) => {
    if (action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sotrBy: action.payload
        }
    }
    if (action.type === 'SET_CATEGORY') {
        return {
            ...state,
            sotrBy: action.payload
        }
    }
    return state;
}

export default filters;