import { createStore, applyMiddleware, compose } from 'redux';
import initReducers from './../reducers';
import middlewares from './../middlewares';
import { apiMiddleware } from 'redux-api-middleware';
import {composeWithDevTools} from "redux-devtools-extension";
import {logger} from "../middlewares/logger";


// function initStore(additionalMiddlewares = []) {
//     let initialStore = {};
//     // if ( !SERVER && window.__REDUX__SERVER__STORE__ ){
//     //     initialStore = JSON.parse(window.__REDUX__SERVER__STORE__);
//     // }
//     const enhancerList = [applyMiddleware(...additionalMiddlewares, ...middlewares),];
//     if (typeof(window) !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__()){
//         enhancerList.push(window.__REDUX_DEVTOOLS_EXTENSION__())
//     }
//     const enhancers = compose(
//         ...enhancerList
//     );
//     let store = createStore( initReducers, initialStore, enhancers );
//     return store
// }
export default function initStore() {
    const innitialStore = {};

    return createStore(
        initReducers,
        innitialStore,
        composeWithDevTools(applyMiddleware(apiMiddleware, logger)),
    );
}
// export default initStore;
