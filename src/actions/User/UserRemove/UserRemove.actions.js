import {userRemoveConstants} from "../../../constants";
import {userRemoveServices} from "../../../services";

const remove = (id) => {
  const request = () => {
    return {
      type: userRemoveConstants.USER_REMOVE_REQUEST
    }
  };
  const success = ( data ) => {
    return {
      type: userRemoveConstants.USER_REMOVE_SUCCESS,
      data: data ? data : null
    }
  };
  const failure = ( errorData ) => {
    return {
      type: userRemoveConstants.USER_REMOVE_FAILURE,
      error: errorData
    }
  };

  return dispatch => {
    dispatch( request() );
    userRemoveServices.remove(id)
      .then(
        data => dispatch( success( data ) ),
      ).catch(
      errorData => dispatch( failure( errorData ) )
    );
  };
}

export const userRemoveActions = {
  remove
};
