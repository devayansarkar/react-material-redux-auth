import { FirebaseError } from 'firebase/app';
import ILoggedInUser from './ILoggedInUser';
import { AuthenticationEventTypes } from '../../store/auth/Events';

export default interface IUserState {
    user?: ILoggedInUser,
    isLoading: boolean,
    isAuthenticated: boolean,
    err?: FirebaseError,
    event: AuthenticationEventTypes
}