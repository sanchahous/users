import {userCreateConstants} from '../../../constants'

const initialState = {
  loading: false,
  error: null,
  success: false
}

/**
 * @param state
 * @param action
 */
export const userCreate = (state = initialState, action) => {
  switch (action.type) {
    case userCreateConstants.USER_CREATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userCreateConstants.USER_CREATE_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true
      };
    case userCreateConstants.USER_CREATE_FAILURE:
      return {
        loading: false,
        error: action.error,
        success: false
      };
    case userCreateConstants.USER_CLEAR:
      return {
        loading: false,
        error: null,
        success: false
      };
    default:
      return state
  }
}
