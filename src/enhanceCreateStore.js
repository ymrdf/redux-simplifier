import { createStore } from 'redux';
import enhanceReducer from './enhanceReducer';

//Enhance the reducers when creat a store;
export default (reducer, preloadedState, enhancer) => createStore(enhanceReducer(reducer), preloadedState, enhancer);