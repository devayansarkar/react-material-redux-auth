import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import history from './config/navigation/History';
import ProtectedRoute from './config/security/ProtectedRoute'
import { connect } from 'react-redux';
import Account from './pages/account/Account';
import LoginContainer from './containers/LoginPageContainer';
import HomeContainer from './containers/HomePageContainer';

function App(props: { isAuthenticated: boolean; isLoading: boolean; }) {
  const { isAuthenticated, isLoading } = props;
  return (
    <Router history={history}>
      <Switch>
        <ProtectedRoute
          exact
          path='/'
          isAuthenticatedPath={false}
          component={HomeContainer}
          isAuthenticated={isAuthenticated}
          isLoading={isLoading}
        />
        <ProtectedRoute
          exact
          path='/account'
          isAuthenticatedPath={true}
          component={Account}
          isAuthenticated={isAuthenticated}
          isLoading={isLoading}
        />
        <Route path='/login' component={LoginContainer} />
      </Switch>
    </Router>
  );
}

function mapStateToProps(state: { authentication: { isAuthenticated: boolean; isLoading: boolean; }; }) {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    isLoading: state.authentication.isLoading
  };
}

export default connect(mapStateToProps)(App);
