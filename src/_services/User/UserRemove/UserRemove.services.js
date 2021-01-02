import {handleResponse} from "../../../_helpers";
import {jsonHeader} from "../../../_helpers";

const remove = (id) => {
  const listRequestOptions = {
    method: 'DELETE',
    headers: jsonHeader()
  };

  return fetch(`http://localhost:3001/users/${id}`, listRequestOptions )
    .then( ( response ) => handleResponse( response ) )
}

export const userRemoveServices = {
  remove
};
