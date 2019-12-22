import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import createStore from './store'
import { Provider } from 'react-redux'

const store = createStore()

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
