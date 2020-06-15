import { User } from 'firebase/app';
import ILoggedInUser from '../../models/auth/ILoggedInUser';

export function mapToUserState(user: User): ILoggedInUser {
    return {
        displayName: user.displayName || user.email,
        profilePic: user.photoURL,
        email: user.email,
        uuid: user.uid
    }
}