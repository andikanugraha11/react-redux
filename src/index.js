import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import store from "./store";

// manual logger
// const myLogger = (store) => (next) => (action) => {
//     console.log("logged action :", action);
//     next(action);
// }

store.subscribe(()=>{
    // console.log('Store updated', store.getState());
});


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();