import actionType from '../src/actionType';

describe('test actionType', () => {
  it('Did not change the actionType when the param is not a string', () => {
    const newType = undefined;
    actionType.resetActionType(newType);
    expect(actionType.TYPE).toBe('$$REPLACE_STATE');
  });
  it('Correctly change the actionType', () => {
    const newType = 'newtype';
    actionType.resetActionType(newType);
    expect(actionType.TYPE).toBe(newType);
  });
});