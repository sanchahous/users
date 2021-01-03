import {handleResponse} from "../../../helpers";
import {jsonHeader} from "../../../helpers";

const create = (data) => {
  const listRequestOptions = {
    method: 'POST',
    headers: jsonHeader(),
    body: JSON.stringify(data)
  };

  return fetch(`http://localhost:3001/users`, listRequestOptions )
    .then( ( response ) => handleResponse( response ) )
}

export const userCreateService = {
  create
};
