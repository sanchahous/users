import {combineReducers} from 'redux';

import {usersList} from "./User/UsersList/UsersList.reducer";
import {userCreate} from "./User/UserCreate/UserCreate.reducer";
import {userUpdate} from "./User/UserUpdate/UserUpdate.reducer";
import {userInfo} from "./User/UserInfo/UsersInfo.reducer";

const rootReducer = combineReducers( {
	usersList,
	userCreate,
	userUpdate,
	userInfo
} );

export default rootReducer;
