import {
    LOGIN_EVENT,
    LOGIN_EVENT_SUCCESS,
    LOGIN_EVENT_FAILURE,
    LOGOUT_EVENT,
    LOGOUT_EVENT_SUCCESS,
    LOGOUT_EVENT_FAILURE,
    AuthenticationActionTypes
} from './Events';
import authState from './AuthState';
import IUserState from '../../models/auth/IUserState';
import { mapToUserState } from '../../utilites/auth/FirebaseToAppStateMapper'
export default (
    state = authState,
    action: AuthenticationActionTypes
): IUserState => {
    switch (action.type) {
        case LOGIN_EVENT:
            return {
                ...state,
                isLoading: true,
                event: LOGIN_EVENT
            };
        case LOGIN_EVENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: mapToUserState(action.payload),
                event: LOGIN_EVENT_SUCCESS
            };
        case LOGIN_EVENT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                err: action.payload,
                event: LOGIN_EVENT_FAILURE
            };
        case LOGOUT_EVENT:
            return {
                ...state,
                isLoading: true,
                event: LOGOUT_EVENT
            };
        case LOGOUT_EVENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                event: LOGOUT_EVENT_SUCCESS,
                user: undefined
            };
        case LOGOUT_EVENT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                err: action.payload,
                event: LOGOUT_EVENT_FAILURE
            };
        default:
            return authState;
    }
};