import { LOGIN_EVENT, LOGIN_EVENT_SUCCESS, LOGIN_EVENT_FAILURE, LOGOUT_EVENT_FAILURE, LoginEvent, LoginEventSuccess, LoginEventFailure, LogoutEvent, LOGOUT_EVENT, LogoutEventSuccess, LOGOUT_EVENT_SUCCESS, LogoutEventFailure, VerifyEvent, VerifyEventSuccess, VERIFY_EVENT, VERIFY_EVENT_SUCCESS } from './Events';

export const loginEvent = (): LoginEvent => ({
    type: LOGIN_EVENT
});

export const loginEventSuccess = (user: firebase.User): LoginEventSuccess => ({
    type: LOGIN_EVENT_SUCCESS,
    payload: user
})

export const loginEventFailure = (err: any): LoginEventFailure => ({
    type: LOGIN_EVENT_FAILURE,
    payload: err
})

export const logoutEvent = (): LogoutEvent => ({
    type: LOGOUT_EVENT
})

export const logoutEventSuccess = (): LogoutEventSuccess => ({
    type: LOGOUT_EVENT_SUCCESS
})

export const logoutEventFailure = (err: any): LogoutEventFailure => ({
    type: LOGOUT_EVENT_FAILURE,
    payload: err
})

export const verifyEvent = (): VerifyEvent => ({
    type: VERIFY_EVENT
})

export const verifyEventSuccess = (user:firebase.User): VerifyEventSuccess => ({
    type: VERIFY_EVENT_SUCCESS,
    payload: user
})