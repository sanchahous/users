import {usersListConstants} from '../../../constants';
import {usersListService} from '../../../services';

const getList = (searchResult) => {
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
        usersListService.getList(searchResult)
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
