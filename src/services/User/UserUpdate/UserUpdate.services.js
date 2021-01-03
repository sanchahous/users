import {handleResponse} from "../../../helpers";
import {jsonHeader} from "../../../helpers";

const update = (data, id) => {
  const listRequestOptions = {
    method: 'PATCH',
    headers: jsonHeader(),
    body: JSON.stringify(data)
  };

  return fetch(`http://localhost:3001/users/${id}`, listRequestOptions )
    .then( ( response ) => handleResponse( response ) )
}

export const userUpdateService = {
  update
};
