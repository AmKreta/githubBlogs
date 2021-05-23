import { UPDATE_USER_INFO, DELETE_CURRENT_USER } from './user.actionTypes';

const initialState = {
    userName: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_INFO:
            //only overwrite info present in payload and also saving in localstorage
            localStorage.setItem('user', JSON.stringify({ ...state, ...action.payload }));
            return { ...state, ...action.payload };
        case DELETE_CURRENT_USER:
            localStorage.removeItem('user');
            return { ...initialState };
        default:
            return state;
    }
}

export default userReducer;