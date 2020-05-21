import { FirebaseError, UserInfo } from 'firebase/app';

export const LOGIN_EVENT = 'LOGIN_EVENT';
export const LOGIN_EVENT_SUCCESS = 'LOGIN_EVENT_SUCCESS';
export const LOGIN_EVENT_FAILURE = 'LOGIN_EVENT_FAILURE';

export const LOGOUT_EVENT = 'LOGOUT_EVENT';
export const LOGOUT_EVENT_SUCCESS = 'LOGOUT_EVENT_SUCCESS';
export const LOGOUT_EVENT_FAILURE = 'LOGOUT_EVENT_FAILURE';
export type AuthenticationEventTypes =
    'LOGIN_EVENT' |
    'LOGIN_EVENT_SUCCESS' |
    'LOGIN_EVENT_FAILURE' |
    'LOGOUT_EVENT' |
    'LOGOUT_EVENT_SUCCESS' |
    'LOGOUT_EVENT_FAILURE' | '';

export interface LoginEvent {
    type: typeof LOGIN_EVENT;
}

export interface LoginEventSuccess {
    type: typeof LOGIN_EVENT_SUCCESS;
    payload: UserInfo;
}

export interface LoginEventFailure {
    type: typeof LOGIN_EVENT_FAILURE;
    payload: FirebaseError;
}
export interface LogoutEvent {
    type: typeof LOGOUT_EVENT;
}

export interface LogoutEventSuccess {
    type: typeof LOGOUT_EVENT_SUCCESS;
}

export interface LogoutEventFailure {
    type: typeof LOGOUT_EVENT_FAILURE;
    payload: FirebaseError;
}
export type AuthenticationActionTypes =
    LoginEvent | LoginEventSuccess | LoginEventFailure |
    LogoutEvent | LogoutEventSuccess | LogoutEventFailure