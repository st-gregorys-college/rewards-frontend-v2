import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { authObserver } from './redux/actions/authActions';

import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';

import Home from './views/Home';
import Login from './views/Login';
import Dashboard from './views/Dashboard';

const App = (props) => {
  useEffect(() => {

    // Subscribe to the auth observer
    const unsubscribe = props.authObserver();

    // Unsubscribe
    return unsubscribe;
  });

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    authObserver: () => dispatch(authObserver())
  };
};

export default connect(null, mapDispatchToProps)(App);