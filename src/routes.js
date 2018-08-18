import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import App from './containers/App';
import Todos from './containers/Todos';
import BsTodos from './containers/BsTodos';
export default () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={App} />
          <Route path="todo" component={Todos} />
          <Route path="bs2todo" component={BsTodos} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />

        </Switch>
      </div>
    </BrowserRouter>
  )

}


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);
