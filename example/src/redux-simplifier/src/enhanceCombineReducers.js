import { combineReducers } from 'redux';
import { warning } from './util';

//Factory method to create reducers used to init state;
const initReducerCreater = (initState) => {
  return function(state = initState){
    return state;
  };
};

/**
 * Enhance redux combineReducers funtion. 
 * When one of reducers's value isn't a function, make the value to be default value of a replace reducer;
 * Return a single reducer function;
 * 
 * @param {Object} reducers An object like redux reducers object, but when it's values are not function, the value will
 * be part of the init state;So that we can replace the values when use replace action;
 *
 * @returns {Function}A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
const enhanceCombineReducers = (reducers) => {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};

  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    
    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        warning(`No reducer provided for key "${key}"`);
      }
    }

    if (typeof reducers[key] !== 'function') {
      finalReducers[key] = initReducerCreater(reducers[key]);
    }else{
      finalReducers[key] = reducers[key];
    }
  }

  return combineReducers(finalReducers);
};

export default enhanceCombineReducers;