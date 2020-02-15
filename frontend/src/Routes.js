import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout } from './layouts';

import UserListView from './views/UserList'
import PlataformaListView from './views/PlataformaList'

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/plataformas"
      />
      <RouteWithLayout
        component={PlataformaListView}
        exact
        layout={MainLayout}
        path="/plataformas"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
