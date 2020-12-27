import {handleResponse} from "../../../_helpers";
import {jsonHeader} from "../../../_helpers";

const getList = () => {
    const listRequestOptions = {
        method: 'GET',
        headers: jsonHeader()
    };

    return fetch(`http://localhost:3001/users`, listRequestOptions )
        .then( ( response ) => handleResponse( response ) )
}

export const usersListService = {
  getList
};
