import actionType from './actionType';
import { warning } from './util';

/**
 * Create a replace action; 
 * @param {string} tag A string to mark which value in the state should be replaced;
 * @param {any} playload The new value;
 * @returns {object} Return a new action object;
 */
const actionCreater = (tag, playload) => {
  if(playload === undefined || !tag ) {
    warning(
      'Replace action don\'t have playload or tag property.' +
      'Expected action to be an object with the following keys: type, playload and tag.'
    );
    return;
  }
  if(typeof tag !== 'string') {
    warning(
      'Replace action\'s tag property should be a string, which can be split by \'.\'. It just like this: \'aa.bb.cc\';'
    );
    return;
  }
  return {
    tag,
    playload,
    type:actionType.TYPE
  };
};

export default actionCreater;