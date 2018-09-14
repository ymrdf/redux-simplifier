# redux-simplifier

在使用 redux 时，要写大量模版代码，开发效率较低。实际开发过程中，有非常多的 reducer 和 action 是为了改变 state 中的一个值。本工具提供一个替换 action，dispatch 这个 action 后可直接改变 state 中的特定 值。本工具在不影响 redux 可预测性的基础上，大大精减了项目的代码。
除此之外，本工具特别容易使用，必须掌握的 API 只有两个简单的函数。

[![Build Status](https://travis-ci.org/ymrdf/redux-simplifier.svg?branch=master)](https://travis-ci.org/ymrdf/redux-simplifier)[![npm version](https://img.shields.io/npm/v/redux-simplifier.svg?style=flat-square)](https://www.npmjs.com/package/redux)[![npm](https://img.shields.io/npm/dm/redux-simplifier.svg)](https://www.npmjs.com/package/redux-simplifier)

[ENGLISH](./readme.md)

## Installation

```bash
$ npm install --save redux-simplifier
```

or

```
$ yarn add redux-simplifier
```

## Usage
有两种使用方法，一种是增强redux的功能，一种是直接替换redux。
方法一：

```js
import { createStore } from 'redux';
import { combineReducers, replaceAction, enhanceReducer } from "redux-simplifier";

const onAddOne = (state = 0, action) => {
  switch (action.type) {
    case "add":
      return state + action.playLoad;
    default:
      return state;
  }
};

const reducer = combineReducers({
  number: onAddOne,
  infor: { text: "text" }
});

const store = createStore(enhanceReducer(reducer));

store.dispatch(replaceAction("infor.text", "new text"));
store.dispatch(replaceAction("number", 1));

//get new state:
// {
//   number: 1,
//   infor: { text: 'new text'}
// }
```

方法二：
```js
import { createStore, combineReducers, replaceAction } from "redux-simplifier";

const onAddOne = (state = 0, action) => {
  switch (action.type) {
    case "add":
      return state + action.playLoad;
    default:
      return state;
  }
};

const reducer = combineReducers({
  number: onAddOne,
  infor: { text: "text" }
});

const store = createStore(reducer);

store.dispatch(replaceAction("infor.text", "new text"));
store.dispatch(replaceAction("number", 1));

//get new state:
// {
//   number: 1,
//   infor: { text: 'new text'}
// }
```

## APIs

### function replaceAction(tag, value)

---

这是一个 action creator，返回一个 ation：
{
type:actionType.TYPE,
tag:tag,
playload:value
}
@param {String} tag 是一个标志符，能标记出需要修改的 state 的层级，如果"a.b", 就是要替换掉 state.a.b 的值。@param {any} value 是要替换的新值。

```
  store.dispacth(replaceAction('infor.text', 'new value'));
```

### function combineReducers(reducers)

---

对 redux 的 combineReducers 函数做了封装，使其参数对象的值可以是非函数，此时，这个值就是初始 state 的值。
@param {Object} reducers: 一个对象，它的值是 reducer 函数或任意数据。为 reducer 函数时，此函数会成为最终 reducer 函数中的一部分，如果是数据，此数据会成为 state 的初始值。

```
  const reducer = combineReducers({
    number: onAddOne,
    infor: { text: 'text' }
  });
```


### function enhanceReducer(reducer)

---

增强reducer的功能，返回一个新的reducer, 使redux可以处理replaceAction。
```
  const finalReducer = enhanceReducer(reducer)
```

## not important API

### object actionType

---

一个管理替换 action 的 type 对象。可以用它来更改替换 action 的 type:

```
  import { actionType } from 'redux-simplifier';
  actionType.resetActionType('MY_REPLACE_TYPE')
```

有时候可能不想使用 replaceAction 函数：

```
  import { actionType } from 'redux-simplifier';
  import store from './store';

  store.dispatch({
    type:actionType.TYPE,
    playload: value,
    tag:tag
  });
```


### other API
---

以下API和redux一样:

* createStore
* bindActionCreators
* applyMiddleware
* compose
* __DO_NOT_USE__ActionTypes

## run example

```bash
$ cd example
$ npm install
$ npm run start
```

## license

MIT
