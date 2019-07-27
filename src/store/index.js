import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';

const intialState = {};
const enhancers = [];
const middleWare = applyMiddleware(createLogger());

const { REACT_APP_NODE_ENV } = process.env;
if (JSON.stringify(REACT_APP_NODE_ENV) === JSON.stringify("development")){
    console.log('Dev tools being set');
    // const devToolsExtension = window.devToolsExtension;
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if( typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
} else {
    console.log('Dev tools not being set. This is a production environment');
}

const composedEnhancers = compose (
    middleWare,
    ...enhancers   // TODO no object body?
);



const store = createStore(

    rootReducer,
    intialState,
    composedEnhancers

);

export default store;