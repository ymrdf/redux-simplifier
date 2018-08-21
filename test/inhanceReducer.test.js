import enhanceReducer from '../src/enhanceReducer';
import actionCreater from '../src/actionCreater.js';

const REPLACE = 'REPLACE';
const ADD = 'ADD';
const CHANGE_A = 'CHANGE_A';

const initState = {a:1, b:2};

const reducer = (state=initState, action) => {
  switch(action.type){
  case REPLACE:
    return action.playload;
  case ADD:
    return {...state, ...action.playload};
  case CHANGE_A:
    return {...state, a:action.playload};
  default:
    return state;
  }
};

const testReducer = enhanceReducer(reducer);

describe('enhanceReducer', () => {
  it('Normal reducer function', () => {
    expect(testReducer(initState,{type:REPLACE, playload:{c:3}})).toMatchObject({c:3});
    expect(testReducer(initState,{type:ADD, playload:{c:3}})).toMatchObject({a:1, b:2, c:3});
    expect(testReducer(initState,{type:CHANGE_A, playload:3})).toMatchObject({a:3, b:2});
  });
  it('Deal with replace action', () => {
    expect(testReducer(initState,actionCreater('a', 4))).toMatchObject({a:4, b:2});
  });
});