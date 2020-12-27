import {userInfoConstants} from '../../../_constants'

const initialState = {
    data: [],
    loading: false,
    error: false,
}

/**
 * @param state
 * @param action
 */
export const userInfo = (state = initialState, action) => {
    switch (action.type) {
        case userInfoConstants.USER_INFO_REQUEST:
            return {
                ...state,
                loading: true
            };
        case userInfoConstants.USER_INFO_SUCCESS:
            return {
                ...state,
                data: action.data ? action.data : [],
                loading: false,
                error: false
            };
        case userInfoConstants.USER_INFO_FAILURE:
            return {
                ...state,
                data: [],
                loading: false,
                error: action.error
            };
        default:
            return state
    }
}
