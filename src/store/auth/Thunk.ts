import firebaseConfig from '../../config/authentication/Firebase'
import { loginEvent, loginEventSuccess, loginEventFailure, logoutEventFailure, logoutEventSuccess, verifyEvent, verifyEventSuccess } from './Actions';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import IUserState from '../../models/auth/IUserState';


export const loginUser = (email: string, password: string, remember: boolean): ThunkAction<void, IUserState, null, Action<string>> => async (dispatch) => {
    dispatch(loginEvent());
    await firebaseConfig.auth().setPersistence(remember ? firebaseConfig.auth.Auth.Persistence.LOCAL : firebaseConfig.auth.Auth.Persistence.SESSION);
    firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            if (user && user.user) dispatch(loginEventSuccess(user.user));
            else dispatch(loginEventFailure({ message: 'No user details found' }));
        })
        .catch(error => {
            dispatch(loginEventFailure(error));
        });
};

export const logoutUser = (): ThunkAction<void, IUserState, null, Action<string>> => async (dispatch) => {
    dispatch(logoutUser());
    firebaseConfig
        .auth()
        .signOut()
        .then(() => {
            dispatch(logoutEventSuccess());
        })
        .catch(error => {
            dispatch(logoutEventFailure(error));
        });
};

export const verifyUserAuthenticationSession = (): ThunkAction<void, IUserState, null, Action<string>> => async (dispatch) => {
    dispatch(verifyEvent());
    firebaseConfig
        .auth()
        .onAuthStateChanged(user => {
            if (user) {
                dispatch(verifyEventSuccess(user));
            }
        });
};