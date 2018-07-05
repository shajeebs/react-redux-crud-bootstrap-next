
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
// import Emps from './containers/Emps';
// import Emp from './containers/Emp';
// import Todos from './containers/Todos';
// import Todo from './containers/Todo';
import Accounts from './containers/Accounts';

export default (
  <Route path="/" component={App}>
     {/*<IndexRoute component={Emps} />
     <Route path="emp" component={Emps} />
     <Route path="emp/:id" component={Emp} />
     <Route path="todo" component={Todos} />
     <Route path="todo/:id" component={Todo} />*/}
     <Route path="account" component={Accounts} />
  </Route>
)