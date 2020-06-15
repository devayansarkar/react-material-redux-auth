import { FirebaseError, User } from 'firebase/app';

export const LOGIN_EVENT = 'LOGIN_EVENT';
export const LOGIN_EVENT_SUCCESS = 'LOGIN_EVENT_SUCCESS';
export const LOGIN_EVENT_FAILURE = 'LOGIN_EVENT_FAILURE';

export const LOGOUT_EVENT = 'LOGOUT_EVENT';
export const LOGOUT_EVENT_SUCCESS = 'LOGOUT_EVENT_SUCCESS';
export const LOGOUT_EVENT_FAILURE = 'LOGOUT_EVENT_FAILURE';

export const VERIFY_EVENT = "VERIFY_REQUEST";
export const VERIFY_EVENT_SUCCESS = "VERIFY_SUCCESS";

export type AuthenticationEventTypes =
    'LOGIN_EVENT' |
    'LOGIN_EVENT_SUCCESS' |
    'LOGIN_EVENT_FAILURE' |
    'LOGOUT_EVENT' |
    'LOGOUT_EVENT_SUCCESS' |
    'LOGOUT_EVENT_FAILURE' |
    'VERIFY_REQUEST' |
    'VERIFY_SUCCESS' | '';

export interface LoginEvent {
    type: typeof LOGIN_EVENT;
}

export interface LoginEventSuccess {
    type: typeof LOGIN_EVENT_SUCCESS;
    payload: User
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
export interface VerifyEvent {
    type: typeof VERIFY_EVENT;
}

export interface VerifyEventSuccess {
    type: typeof VERIFY_EVENT_SUCCESS;
    payload: User
}
export type AuthenticationActionTypes =
    LoginEvent | LoginEventSuccess | LoginEventFailure |
    VerifyEvent | VerifyEventSuccess |
    LogoutEvent | LogoutEventSuccess | LogoutEventFailure