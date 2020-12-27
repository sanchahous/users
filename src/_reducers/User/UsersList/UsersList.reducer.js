import {usersListConstants} from '../../../_constants'

const initialState = {
    list: [],
    loading: false,
    error: false,
    success: false
}

/**
 * @param state
 * @param action
 */
export const usersList = (state = initialState, action) => {
    switch (action.type) {
        case usersListConstants.USERS_LIST_REQUEST:
            return {
                ...state,
                loading: true
            };
        case usersListConstants.USERS_LIST_SUCCESS:
            return {
                ...state,
                list: action.data ? action.data : [],
                loading: false,
                error: false,
                success: true
            };
        case usersListConstants.USERS_LIST_FAILURE:
            return {
                ...state,
                list: [],
                loading: false,
                error: action.error,
                success: false
            };
        default:
            return state
    }
}
