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
// import Timer from './Timer';
// import List from './List';

 // ReactDOM.render(<Timer />, document.getElementById('timer'));
/*ReactDOM.render(<List />, document.getElementById('list'));*/
const store = createStore(app,applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><BrowserRouter>
<App />
</BrowserRouter></Provider>, document.getElementById('root'));
