import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import AppRoutes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import registerServiceWorker from './registerServiceWorker';
const store = configureStore();
ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <div className="content">
                    <AppRoutes />
                    
                </div>
            </Provider>
        </BrowserRouter>
        , document.getElementById('root'));
registerServiceWorker();
