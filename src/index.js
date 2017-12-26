// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { createStore , combineReducers} from 'redux';


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

// if reducer state parameter didn't initialize
// const store = createStore(reducer, 1);

// const store = createStore(mathReducer);
const store = createStore(combineReducers({mathReducer,userReducer}));

store.subscribe(()=>{
    console.log('Store updated', store.getState());
});

store.dispatch({
    type : 'ADD',
    payload : 10,
});

store.dispatch({
    type : 'ADD',
    payload : 10,
});

store.dispatch({
    type : 'ADD',
    payload : 10,
});

store.dispatch({
    type : 'SUBSTRACT',
    payload : 20,
});

store.dispatch({
    type : 'SET_USERNAME',
    payload : 'Andika Nugraha',
});