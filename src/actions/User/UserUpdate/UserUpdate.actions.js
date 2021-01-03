import {userCreateConstants, userUpdateConstants} from '../../../constants';
import {userUpdateService} from '../../../services';

const update = (data, id) => {
  const request = () => {
    return {
      type: userUpdateConstants.USER_UPDATE_REQUEST
    }
  };
  const success = ( data ) => {
    return {
      type: userUpdateConstants.USER_UPDATE_SUCCESS,
      data: data ? data : null
    }
  };
  const failure = ( errorData ) => {
    return {
      type: userUpdateConstants.USER_UPDATE_FAILURE,
      error: errorData
    }
  };

  return dispatch => {
    dispatch( request() );
    userUpdateService.update(data, id)
      .then(
        info => dispatch( success( info ) ),
      ).catch(
      errorData => dispatch( failure( errorData ) )
    );
  };
}

const clear = () => {
  return dispatch => {
    dispatch( { type: userUpdateConstants.USER_CLEAR} );
  }
}

export const userUpdateActions = {
  update,
  clear
};
