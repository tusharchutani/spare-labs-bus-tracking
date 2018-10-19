import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
var defaultState = {};


function configigureStore(initialState=defaultState){
    var store = createStore(rootReducer, initialState, 
            compose(applyMiddleware(thunk)));
    return store;
}

export default configigureStore;