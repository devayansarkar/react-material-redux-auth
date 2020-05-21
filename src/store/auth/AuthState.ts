import IUserState from '../../models/auth/IUserState';

const authState: IUserState = {
    isLoading: false,
    isAuthenticated: false,
    user: undefined, // no user details
    err: undefined,
    event: ''
}

export default authState;