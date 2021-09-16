import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'; // async calls - api calls

// all reducers
import productReducer from './reducers/productReducer';
import {brandsReducer} from './reducers/brandsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// combine all reducers
const rootReducer = combineReducers({
    products: productReducer,
    brands: brandsReducer,
});

// create store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;



