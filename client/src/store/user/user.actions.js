import { UPDATE_USER_INFO, DELETE_CURRENT_USER } from './user.actionTypes';

export const updateUserInfo = (payload) => {
    return { type: UPDATE_USER_INFO, payload };
}

export const deleteCurrentUser = () => {
    return { type: DELETE_CURRENT_USER };
}