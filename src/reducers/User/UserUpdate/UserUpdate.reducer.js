import {userCreateConstants, userUpdateConstants} from '../../../constants'

const initialState = {
  data: [],
  loading: false,
  error: null,
  success: false
}

/**
 * @param state
 * @param action
 */
export const userUpdate = (state = initialState, action) => {
  switch (action.type) {
    case userUpdateConstants.USER_UPDATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userUpdateConstants.USER_UPDATE_SUCCESS:
      return {
        data : action.data ? action.data : [],
        loading: false,
        error: null,
        success: true
      };
    case userUpdateConstants.USER_UPDATE_FAILURE:
      return {
        data : [],
        loading: false,
        error: action.error,
        success: false
      };
    case userCreateConstants.USER_CLEAR:
      return {
        ...state,
        loading: false,
        error: null,
        success: false
      };
    default:
      return state
  }
}
