import {usersListConstants} from '../../../_constants';
import {usersListService} from '../../../_services';

const getList = () => {
    const request = () => {
        return {
            type: usersListConstants.USERS_LIST_REQUEST
        }
    };
    const success = ( data ) => {
        return {
            type: usersListConstants.USERS_LIST_SUCCESS,
            data: data ? data : null
        }
    };
    const failure = ( errorData ) => {
        return {
            type: usersListConstants.USERS_LIST_FAILURE,
            error: errorData
        }
    };

    return dispatch => {
        dispatch( request() );
        usersListService.getList()
            .then(
                info => dispatch( success( info ) ),
            ).catch(
            errorData => dispatch( failure( errorData ) )
        );
    };
}

export const usersListActions = {
    getList
};
