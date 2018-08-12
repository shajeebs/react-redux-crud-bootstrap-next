// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Todos from './containers/Todos';
import BsTodos from './containers/BsTodos';
import Accounts from './containers/Accounts';
import Account from './containers/Account';
export default (
  <Route path="/" component={App}>
     <IndexRoute path="todo" component={Todos} /> 
     <Route path="todo" component={Todos} />
     <Route path="bstodo" component={BsTodos} />
     <Route path="account" component={Accounts} />
     <Route path="account/:id" component={Account} />
  </Route>
)
