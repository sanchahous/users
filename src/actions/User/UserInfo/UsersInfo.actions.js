import {userInfoConstants} from "../../../constants";
import {userInfoService} from "../../../services";

const getInfo = (id) => {
    const request = () => {
        return {
            type: userInfoConstants.USER_INFO_REQUEST
        }
    };
    const success = ( data ) => {
        return {
            type: userInfoConstants.USER_INFO_SUCCESS,
            data: data ? data : null
        }
    };
    const failure = ( errorData ) => {
        return {
            type: userInfoConstants.USER_INFO_FAILURE,
            error: errorData
        }
    };

    return dispatch => {
        dispatch( request() );
        userInfoService.getInfo(id)
          .then(
            info => dispatch( success( info ) ),
          ).catch(
          errorData => dispatch( failure( errorData ) )
        );
    };
}

export const userInfoActions = {
    getInfo
};
