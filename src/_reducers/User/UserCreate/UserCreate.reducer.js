import {userCreateConstants} from '../../../_constants'

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
export const userCreate = (state = initialState, action) => {
  switch (action.type) {
    case userCreateConstants.USER_CREATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userCreateConstants.USER_CREATE_SUCCESS:
      return {
        ...state,
        data : action.data ? action.data : [],
        loading: false,
        error: false
      };
    case userCreateConstants.USER_CREATE_FAILURE:
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
