# redux-simplifier

在使用redux时，要写大量模版代码，开发效率较低。实际开发过程中，有非常多的reducer和action是为了改变state中的一个值。本工具提供一个替换action，dispatch这个action后可直接改变state中的特定值。本工具在不影响redux可预测性的基础上，大大精减了项目的代码。
除此之外，本工具特别容易使用，必须掌握的API只有两个简单的函数。

## Installation

```bash
$ npm install --save redux-simplifier
```

or

```
$ yarn add redux-simplifier
```

## Usage

```js
import { createStore, combineReducers, replaceAction } from 'redux-simplifier';

const onAddOne = (state = 0, action) => {
  switch (action.type){
  case 'add':
    return state + action.playLoad;
  default:
    return state;
  }
};

const reducer = combineReducers({
  number: onAddOne,
  infor: { text: 'text' }
});

const store = createStore(reducer);

store.dispatch(replaceAction('infor.text', 'new text'));
store.dispatch(replaceAction('number', 1));

//get new state:
// {
//   number: 1,
//   infor: { text: 'new text'}
// }

```

## must know API

### function replaceAction(tag, value)
---
这是一个action creator，返回一个ation：
{
  type:actionType.TYPE,
  tag:tag,
  playload:value
}
@param {String} tag是一个标志符，能标记出需要修改的state的层级，如果"a.b",就是要替换掉state.a.b的值。
@param {any} value是要替换的新值。

#### EXAMPLE

```
  store.dispacth(replaceAction('infor.text', 'new value'));
```

### function combineReducers(reducers)
---
对redux的combineReducers函数做了封装，使其参数对象的值可以是非函数，此时，这个值就是初始state的值。
@param {Object} reducers: 一个对象，它的值是reducer函数或任意数据。为reducer函数时，此函数会成为最终reducer函数中的一部分，如果是数据，此数据会成为state的初始值。

#### EXAMPLE

```
  const reducer = combineReducers({
    number: onAddOne,
    infor: { text: 'text' }
  });
```

## may need API
### object actionType
---
一个管理替换action的type对象。可以用它来更改替换action的type:
```
  import { actionType } from 'redux-simplifier';
  actionType.resetActionType('MY_REPLACE_TYPE')
```
有时候可能不想使用replaceAction函数：
```
  import { actionType } from 'redux-simplifier';
  import store from './store';
  
  store.dispatch({
    type:actionType.TYPE,
    playload: value,
    tag:tag
  });
```
## license
MIT