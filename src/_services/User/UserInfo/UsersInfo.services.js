import {handleResponse} from "../../../_helpers";
import {jsonHeader} from "../../../_helpers";

const getInfo = (id) => {
    const listRequestOptions = {
        method: 'GET',
        headers: jsonHeader()
    };

    return fetch(`http://localhost:3001/users/${id}`, listRequestOptions )
        .then( ( response ) => handleResponse( response ) )
}

export const userInfoService = {
  getInfo
};
