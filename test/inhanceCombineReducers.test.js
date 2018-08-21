import enhanceCombineReducers from '../src/enhanceCombineReducers';

const initState = {a:1, b:2};

const reducer = (state=initState) => {
  return state;
};

const combineReducer = enhanceCombineReducers({
  reducer,
  test: { text:'test' }
});

describe('enhanceCombineReducers', () => {
  it('Get init state', () => {
    expect(combineReducer(undefined, {type:'INIT'})).toMatchObject({
      reducer:{a:1, b:2},
      test: {text: 'test'}
    });
  });
});