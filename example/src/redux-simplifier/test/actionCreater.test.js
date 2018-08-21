import actionCreater from '../src/actionCreater.js';

describe('actionCreater', () => {
  it('warns when the params are improper', () => {
    expect(actionCreater()).toBeUndefined();
    expect(actionCreater('aa')).toBeUndefined();
  });

  it('create action', () => {
    expect(actionCreater('aa',1)).toMatchObject({type:'$$REPLACE_STATE', playload:1, tag:'aa'});
  });
});