# redux-simplifier

[![Build Status](https://travis-ci.org/ymrdf/redux-simplifier.svg?branch=master)](https://travis-ci.org/ymrdf/redux-simplifier)
[![npm](https://img.shields.io/npm/v/redux-simplifier.svg)](https://www.npmjs.com/package/redux-simplifier)[![npm](https://img.shields.io/npm/dm/redux-simplifier.svg)](https://www.npmjs.com/package/redux-simplifier)

Using redux needs lot's of boilerplate codes,it's very inefficient.Most of reducers and actions are used to replace a value in state. This tool provide a replace action, which will change the value after being dispatched without a reduc er. So, this tool can greatly simplify you code without affect the redux's predictable.
Besides, this tool is very easy to use, you just need to know two simply function.

[中文](./readme-zh.md)

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

## must know API

### function replaceAction(tag, value)

---

A action creator, return a ation like this：
{
type:actionType.TYPE,
tag:tag,
playload:value
}
@param {String} tag is a symbol, to mark the state you want to be replace. "a.b" mean state.a.b will be replaced。
@param {any} value mean the new value you want to replace。

#### EXAMPLE

```
  store.dispacth(replaceAction('infor.text', 'new value'));
```

### function combineReducers(reducers)

---

Enhance redux combineReducers funtion. When one of reducers's value isn't a function, make the value to be init value of the state.
@param {Object} reducers: An object like redux reducers object, but when it's values are not function, the value will
be part of the init state; So that we can replace the values when use replace action.

#### EXAMPLE

```
  const reducer = combineReducers({
    number: onAddOne,
    infor: { text: 'text' }
  });
```

## may need know API

### object actionType

---

This is an Object to manage replace-action type. Can be used to reset replace-action's type:

```
  import { actionType } from 'redux-simplifier';
  actionType.resetActionType('MY_REPLACE_TYPE')
```

Sometimes you don't like to use replaceAction:

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

Below apis are the same with redux:

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
