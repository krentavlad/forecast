import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import reduxPromise from 'redux-promise'
//chercher app.js partout dans le doc pour l'inserer ici
//index html et js sont obligatoires où
//index html doit se trouver dans public/
import App from './components/app';
import reducers from './reducers'
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <Provider store ={createStoreWithMiddleware(reducers)}>
    <App />
    </Provider>
    , document.getElementById('root'));
//registerServiceWorker();
