//Data layer control, Bootup (Redux)
import 'materialize-css/dist/css/materialize.min.css';      //webpack to wire up materialize css file
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk));

const el = document.getElementById('root');     // set a reference to the html element
const root = ReactDOM.createRoot(el);   // tell React to take control of this element
root.render(
    <Provider store={store}><App /></Provider>
);   // render app
