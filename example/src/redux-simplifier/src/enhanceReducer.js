import actionType from './actionType';
import { warning } from './util';

// Get next state from current state and replace action;
const getNextState = (state, action) => {
  const tags = action.tag.split('.');
  return replaceState(state, tags, action.playload);
};

// Replace state in preState;
const replaceState = (preState, tags, playload) => {
  if(tags.length>1){
    return {...preState, [tags[0]]:replaceState(preState[tags[0]], tags.slice(1), playload)};
  }
  return {...preState, [tags[0]]:playload};
  
};

/**
 * Determine that the param is a ReplaceStateAction, which is like this:
 * {
 *  type:actionType.TYPE,
 *  playload:any,
 *  tag:string
 * }
 * @param {Object} action
 */
const affirmReplaceAction = (action) => {
  if (action.playload === undefined || !action.tag) {
    warning(
      'Replace action don\'t have playload or tag property.'
      + 'Expected action to be an object with the following keys: type, playload and tag.',
    );
    return;
  }
  if (typeof action.tag !== 'string') {
    warning(
      'Replace action\'s tag property should be a string, which can be split by \'.\'. It just like this: \'aa.bb.cc\';',
    );
    return;
  }
  return true;
};

/**
 * Enhance the reducers, make sure redux can handle the State replace actions;
 * @param {Function} reducer the origin reducer
 * @returns {Function} new reducer;
 */
const enhanceReducer = (reducer) => {
  const replaceReducer = (state, action) => {
    if (action.type === actionType.TYPE && affirmReplaceAction(action)) {
      return getNextState(state, action);
    }
    return reducer(state, action);
  };

  return replaceReducer;
};

export default enhanceReducer;
