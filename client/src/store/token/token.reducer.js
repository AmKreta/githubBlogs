import { UPDATE_TOKENS, DELETE_TOKENS } from './token.actionTypes';

const initialState = {
    accessToken: null,
    refreshToken: null
};

const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TOKENS:
            //also saving state in localstorage
            localStorage.setItem('token', JSON.stringify({ ...action.payload }));
            return { ...action.payload };
        case DELETE_TOKENS:
            localStorage.removeItem('token');
            return { ...initialState };
        default:
            return state;
    }
}

export default tokenReducer;