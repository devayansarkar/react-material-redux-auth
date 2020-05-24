import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from '../../store/auth/Reducers';
const rootReducer = combineReducers({
    authentication: authReducer,
});

export default function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware)
    );
    return store;
}