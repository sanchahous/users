import {combineReducers} from 'redux';

import {usersList} from "./User/UsersList/UsersList.reducer";
import {userCreate} from "./User/UserCreate/UserCreate.reducer";
import {userRemove} from "./User/UserRemove/UserRemove.reducer";
import {userUpdate} from "./User/UserUpdate/UserUpdate.reducer";
import {userInfo} from "./User/UserInfo/UsersInfo.reducer";

const rootReducer = combineReducers( {
	usersList,
	userCreate,
	userRemove,
	userUpdate,
	userInfo,
} );

export default rootReducer;
