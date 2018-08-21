/**
 * This is replace action type reserved by this REP.
 * You can set the action type, but do not reference the replace action type directly in your code.
 */

let _TYPE = '$$REPLACE_STATE';

class ActionType2{
  get TYPE() {
    return _TYPE;
  }
  /**
   * Reset current replace state action types;
   * @param {string} newType 
   */
  resetActionType(newType){
    if(newType && typeof newType === 'string'){
      _TYPE = newType;
    }
  }
}

export default new ActionType2();