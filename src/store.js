import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './Reducers/productReducers';




//Set initial state: empty obj
const initialState = {};
const reducer = combineReducers({
    productList:productListReducer, 
})
const composeEnhancer =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// create store and set param to reducer and initialState
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;