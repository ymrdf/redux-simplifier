import { createStore } from 'redux';
import { warning } from './util';

const inhanceCreateStore = (reducer, preloadedState, enhancer) => {

  if (typeof preloadedState === 'function' || preloadedState == undefined) {
    warning(
      `Default state is necessary, for maybe there don't have reducers to init some state;
      You just need to set the initial state without reducers.
      `
    );
  }
  return createStore(reducer, preloadedState, enhancer);
};

export default inhanceCreateStore;