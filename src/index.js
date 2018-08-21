import {
  bindActionCreators,
  applyMiddleware,
  compose,
  __DO_NOT_USE__ActionTypes,
} from 'redux';
import enhanceReducer from './enhanceReducer';
import combineReducers from './enhanceCombineReducers';
import actionType from './actionType';
import replaceAction from './actionCreater';
import createStore from './enhanceCreateStore';

export {
  // The same as redux;
  createStore,
  // The same as redux;
  bindActionCreators,
  // The same as redux;
  applyMiddleware,
  // The same as redux;
  compose,
  // The same as redux;
  __DO_NOT_USE__ActionTypes,
  // Function, Enhance the reducers, make sure redux can handle the State replace actions;
  enhanceReducer,
  // Object, manage the action type of this REP;
  actionType,
  /**
   * Enhance redux combineReducers funtion.
   * When one of reducers's value isn't a function, make the value to be default value of a replace reducer;
   * Return a single reducer function;
   *
   * @param {Object} reducers An object like redux reducers object, but when it's values are not function, the value will
   * be part of the init state;So that we can't replace the values when use replace action;
   *
   * @returns {Function}A reducer function that invokes every reducer inside the
   * passed object, and builds a state object with the same shape.
   */
  combineReducers,
  // Function, create a replace action;
  replaceAction,
};
