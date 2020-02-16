import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout } from './layouts';

import UserListView from './views/UserList'
import PlataformaDetalhes from 'views/PlataformaDetalhes';
//import PlataformaListView from './views/PlataformaList'

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/plataformas"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/plataformas"
      />
      <RouteWithLayout
        component={PlataformaDetalhes}
        exact
        layout={MainLayout}
        path="/plataformas/:plataformaId/detalhes"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
