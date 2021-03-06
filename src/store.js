import { createStore , combineReducers,  applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form'
import logger from "redux-logger";
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import mathReducer from "./reducers/mathReducer";
import userReducer from "./reducers/userReducer";
// manual       
// const store = createStore(combineReducers({mathReducer,userReducer}), {}, applyMiddleware(myLogger));
const store = createStore(
    combineReducers({
            mathReducer,
            userReducer,
            form : formReducer
        }),
        {},
        applyMiddleware(logger, thunk, promise())
    );

export default store;