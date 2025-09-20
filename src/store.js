//Configures and exports the Redux store.
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import quoteReducer from './quoteSlice'

const store = ReactReduxContext.createStore(quoteReducer);

const Provider = ReactReduxContext.Provider;
const connect = ReactReduxContext.connect;