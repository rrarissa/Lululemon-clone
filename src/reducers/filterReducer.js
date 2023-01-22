import {actionType} from "../components/Helper";

const initState = {
    fetchList: null,
}

export const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.FETCH_FILTER:
            console.log(`[reducer] ${actionType.FETCH_FILTER}`, action.payload)
            return {...state, fetchList: action?.payload}
        default:
            return state
    }
}

