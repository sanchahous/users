import {handleResponse} from "../../../_helpers";
import {jsonHeader} from "../../../_helpers";

const getList = (searchResult, paginationResult) => {
    const listRequestOptions = {
        method: 'GET',
        headers: jsonHeader()
    };
    const convertedSearchResult = searchResult && Object.keys(searchResult).map(function (key, index) {
        if(searchResult[key]) {
            return `${index > 0 ? '&' : ''}${key}=${searchResult[key]}`
        }
    }).join("");
    const convertedPaginationResult = paginationResult && Object.keys(paginationResult).map(function (key, index) {
        if(paginationResult[key]) {
            return `${index > 0 ? '&' : ''}${key}=${paginationResult[key]}`
        }
    }).join("");
    console.log('convertedSearchResult', convertedSearchResult)
    return fetch(`http://localhost:3001/users?${convertedSearchResult}${convertedPaginationResult}`, listRequestOptions )
        .then( ( response ) => handleResponse( response ) )
}

export const usersListService = {
  getList
};
