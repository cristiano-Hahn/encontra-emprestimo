import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout } from './layouts';

import UserListView from './views/UserList'

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/users"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
