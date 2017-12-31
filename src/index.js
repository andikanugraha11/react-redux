import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";

import { createStore , combineReducers,  applyMiddleware } from 'redux';
import logger from 'redux-logger';

const mathReducer = (state = {
    result : 1,
    lastValues : []
},action)=>{
    switch(action.type){
        case "ADD":
            state = {
                // result : state.result,
                // lastValues : state.lastValues,
                ...state,
                result : state.result + action.payload,
                // Push array
                lastValues : [...state.lastValues, action.payload]
            }
            break;
        case "SUBSTRACT":
            state = {
                ...state,
                result : state.result - action.payload,
                lastValues : [...state.lastValues, action.payload]
            }
            break;
    }
    return state;
}

const userReducer = (state = {
    username : 'Andika',
    email : 'm.andika.nugraha@gmail.com'
},action)=>{
    switch(action.type){
        case "SET_USERNAME":
            state = {
                ...state,
                username : action.payload
            }
            break;
        case "SET_EMAIL":
            state = {
                ...state,
                email : action.payload
            }
            break;
    }
    return state;
}

// manual logger
const myLogger = (store) => (next) => (action) => {
    console.log("logged action :", action);
    next(action);
}

// if reducer state parameter didn't initialize
// const store = createStore(reducer, 1);

// const store = createStore(mathReducer);

// manual       
// const store = createStore(combineReducers({mathReducer,userReducer}), {}, applyMiddleware(myLogger));
const store = createStore(combineReducers({mathReducer,userReducer}), {}, applyMiddleware(logger));

store.subscribe(()=>{
    // console.log('Store updated', store.getState());
});

// store.dispatch({
//     type : 'ADD',
//     payload : 10,
// });

// store.dispatch({
//     type : 'ADD',
//     payload : 10,
// });

// store.dispatch({
//     type : 'ADD',
//     payload : 10,
// });

// store.dispatch({
//     type : 'SUBSTRACT',
//     payload : 20,
// });

// store.dispatch({
//     type : 'SET_USERNAME',
//     payload : 'Andika Nugraha',
// });


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();