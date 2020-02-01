import { userConstants } from './../constants'

const initialState = {
    loading: true,
    token: null,
}

export function user(state = initialState, action) {
    switch(action.type) {
        case userConstants.GET_TOKEN_REQUEST:
            return { ...state, loading: true }
        case userConstants.GET_TOKEN_SUCCESS:
            return { ...state, token: action.token, loading: false }
        case userConstants.GET_TOKEN_FAILURE:
            return { ...state, error: action.error, loading: false }
        default:
            return state
    }
}
