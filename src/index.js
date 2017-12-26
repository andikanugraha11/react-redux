// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { createStore } from 'redux';

const initialState = {
    result : 1,
    lastValues : [],
    username : 'dika'
}

const reducer = (state = initialState,action)=>{
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

// if reducer state parameter didn't initialize
// const store = createStore(reducer, 1);

const store = createStore(reducer);

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
})