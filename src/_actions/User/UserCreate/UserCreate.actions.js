import {userCreateConstants} from '../../../_constants';
import {userCreateService} from '../../../_services';

const create = (data) => {
  const request = () => {
    return {
      type: userCreateConstants.USER_CREATE_REQUEST
    }
  };
  const success = ( data ) => {
    return {
      type: userCreateConstants.USER_CREATE_SUCCESS,
      data: data ? data : null
    }
  };
  const failure = ( errorData ) => {
    return {
      type: userCreateConstants.USER_CREATE_FAILURE,
      error: errorData
    }
  };

  return dispatch => {
    dispatch( request() );
    userCreateService.create(data)
      .then(
        info => dispatch( success( info ) ),
      ).catch(
      errorData => dispatch( failure( errorData ) )
    );
  };
}

const clear = () => {
  return dispatch => {
    dispatch( { type: userCreateConstants.USER_CLEAR} );
  }
}

export const userCreateActions = {
  create,
  clear
};
