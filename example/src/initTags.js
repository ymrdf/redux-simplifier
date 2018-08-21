export let allTags = {};

const initTags = (tags) => {
  if(typeof tags == 'object'){
    allTags = tags;
  }
};

export const getInitState = () => {
  const state = {};
  Object.keys(allTags).forEach(tag => {
    const fragments = tag.split('.');
    let curState = state;
    let i = 0;
    while( i < fragments.length ){
      const fragment = fragments[i];
      if(!curState[fragment]){
        curState = curState[fragment] = {};
      }else{
        curState = curState[fragment];
      }
      i++;
    }
  });

  return state;
};

export default initTags;