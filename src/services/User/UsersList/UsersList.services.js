import {handleResponse} from "../../../helpers";
import {jsonHeader} from "../../../helpers";

const getList = (searchResult) => {
    const listRequestOptions = {
        method: 'GET',
        headers: jsonHeader()
    };
    const convertedSearchResult = searchResult && Object.keys(searchResult).map(function (key, index) {
        if(searchResult[key]) {
            return `${index > 0 ? '&' : ''}${key}=${searchResult[key]}`
        }
    }).join("");
    return fetch(`http://localhost:3001/users?${convertedSearchResult}`, listRequestOptions )
        .then( ( response ) => handleResponse( response ) )
}

export const usersListService = {
  getList
};
