import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './helpers/ResetSomeDefaultEvents';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers/rootReducer';
import thunk from 'redux-thunk';

console && console.log( '%c+', 'font-size: 1px; padding: 150px 87px; line-height: 0; background: url("https://cs.pikabu.ru/assets/images/dev.png"); background-size: 175px 300px; color: transparent;' );
console.log( `${ process.env.REACT_APP_NAME } ${ process.env.REACT_APP_VERSION }` );

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__( {} ) : compose;

const store = createStore( rootReducer, composeEnhancers( applyMiddleware( thunk ) ) );

const app = (
    <Provider store={ store }>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
reportWebVitals();
