// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { createStore } from 'redux';

const reducer = (state,action)=>{
    switch(action.type){
        case "ADD":
            state = state + action.payload;
            break;
        case "SUBSTRACT":
            state = state - action.payload;
            break;
    }
    return state;
}

const store = createStore(reducer, 1);

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