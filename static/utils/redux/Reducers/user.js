/**
* Module reducer untuk users
* @module reducer/users
*/
import { LOADING, FINISH, RESET } from '../Actions/user'


/**
* Inisialisasi State
*/
const initialState = {
    user: null,
    loading: false
};

//reducer

/**
* Reducer
*/
export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, ...action.data };
        case FINISH:
            return { ...state, ...action.data }
        case RESET:
            return { ...initialState }
        default:
            return state;
    }
};