import { UPDATE_TOKENS, DELETE_TOKENS } from './token.actionTypes';

export const updateTokens = (tokens) => {
    return { type: UPDATE_TOKENS, payload: tokens };
}

export const deleteTokens = () => {
    return { type: DELETE_TOKENS };
}
