import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './containers/App';
import Todos from './containers/Todos';
import BsTodos from './containers/BsTodos';
export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
        <Route path="todo" component={Todos} />
        <Route path="bstodo" component={BsTodos} />
      </Switch>
    </BrowserRouter>
  )
}
