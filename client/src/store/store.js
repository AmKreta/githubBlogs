import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './user/user.reducer';
import tokenReducer from './token/token.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    token: tokenReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;