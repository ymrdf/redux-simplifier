import {
  //createStore,
  combineReducers,
  actionType,
  replaceAction,
  enhanceReducer
} from 'redux-simplifier';

import { createStore } from 'redux';

actionType.resetActionType('$REPLACE_ACTION');

const onAddOne = (state = 0, action) => {
  switch (action.type) {
  case 'add':
    return state + action.playLoad;
  default:
    return state;
  }
};

const reducer = combineReducers({
  number: onAddOne,
  aa: { time: new Date().toLocaleString() }
});

export const addOne = () => {
  return {
    type: 'add',
    playLoad: 1
  };
};

export const test = () => {
  return replaceAction('aa.time', new Date().toLocaleString());
};

export default createStore(enhanceReducer(reducer), { number: 2 });

