/**
* Module store redux
* @module redux/store
*/
import { combineReducers } from 'redux';
import user from './Reducers/user'


/**
* Kombinasi Reducers
*/
export default combineReducers({ user });