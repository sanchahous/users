import {userUpdateConstants} from '../../../_constants'

const initialState = {
  data: [],
  loading: false,
  error: false,
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
        ...state,
        data : action.data ? action.data : [],
        loading: false,
        error: false
      };
    case userUpdateConstants.USER_UPDATE_FAILURE:
      return {
        ...state,
        data : [],
        loading: false,
        error: action.error
      };
    default:
      return state
  }
}
