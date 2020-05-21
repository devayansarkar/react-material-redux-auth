import { RouteProps } from 'react-router';

export default interface ProtectedRouteProps extends RouteProps {
    isAuthenticated: boolean;
    isLoading: boolean;
    isAuthenticatedPath: boolean;
}