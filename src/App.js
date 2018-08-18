import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRoutes from './routes';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="content">
          <AppRoutes />
        </div>
      </Provider>
    );
  }
}

export default App;
