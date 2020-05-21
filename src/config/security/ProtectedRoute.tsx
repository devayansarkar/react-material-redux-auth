import * as React from 'react';
import { Redirect, Route } from 'react-router';
import ProtectedRouteProps from '../../models/route/ProtectedRouteProps'

export default class ProtectedRoute extends Route<ProtectedRouteProps> {
    public render() {
        let redirectPath: string = '';
        if (!this.props.isAuthenticated && this.props.isAuthenticatedPath) {
            redirectPath = '/login';
        }
        if (redirectPath) {
            const renderComponent = () => (<Redirect to={{ pathname: redirectPath }} />);
            return <Route {...this.props} component={renderComponent} render={undefined} />;
        } else {
            return <Route {...this.props} />;
        }
    }
}