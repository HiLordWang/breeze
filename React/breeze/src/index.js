import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter,Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import './assect/css/style.css'
import './assect/iconfont/iconfont.css'
// import {createStore} from 'redux'
import {Provider} from 'react-redux'
import store from './store/store'
// import reducer from "./store/reducer";
// import state from "./store/state";
// const store = createStore(reducer,state);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
