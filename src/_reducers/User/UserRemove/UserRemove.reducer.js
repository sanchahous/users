import {userRemoveConstants} from '../../../_constants'

const initialState = {
  loading: false,
  error: null,
  success: false
}

/**
 * @param state
 * @param action
 */
export const userRemove = (state = initialState, action) => {
  switch (action.type) {
    case userRemoveConstants.USER_REMOVE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userRemoveConstants.USER_REMOVE_SUCCESS:
      return {
        success: true,
        loading: false,
        error: null
      };
    case userRemoveConstants.USER_REMOVE_FAILURE:
      return {
        success: false,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
}
