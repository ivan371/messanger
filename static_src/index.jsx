import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

const history = createHistory();
const middleware = routerMiddleware(history);
import initStore from './utiles/store';
import App from "./App";

ReactDOM.render(
    <Provider store={ initStore([middleware]) }>
        <ConnectedRouter history={ history }>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);