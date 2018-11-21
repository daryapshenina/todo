import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import thunkMiddleware from 'redux-thunk'
import app from './reducers/reducers'
//import '../../public/style.css'


const store = createStore(app,applyMiddleware(thunk))

 ReactDOM.render(
 <Provider store={store}><App /></Provider>,
 document.getElementById('root')
 );