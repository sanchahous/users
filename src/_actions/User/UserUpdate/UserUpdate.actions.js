import {userUpdateConstants} from '../../../_constants';
import {userUpdateService} from '../../../_services';

const update = (data) => {
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
    userUpdateService.update(data)
      .then(
        info => dispatch( success( info ) ),
      ).catch(
      errorData => dispatch( failure( errorData ) )
    );
  };
}



export const userUpdateActions = {
  update
};
