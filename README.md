# nullpo

Remove falsey values from array and object

![npm: nullpo](https://img.shields.io/npm/v/nullpo.svg)
[![CircleCI](https://circleci.com/gh/nju33/nullpo.svg?style=svg&circle-token=b9754c3905f1550fda28736f28fc2a4a4ca08735)](https://circleci.com/gh/nju33/nullpo)
[![Coverage Status](https://coveralls.io/repos/github/nju33/nullpo/badge.svg?branch=master)](https://coveralls.io/github/nju33/nullpo?branch=master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

## Install

```bash
yarn add [-D] nullpo
```

## Usage

```js
import nullpo from 'nullpo';

nullpo(['foo', null, '', 123, false, () => {}]);
// [ 'foo', 123, [Function] ]

nullpo({
  foo: 'foo',
  null: null,
  empty: '',
  number: 123,
  boolean: false,
  function() {}
});
// {
//   foo: 'foo',
//   number: 123,
//   function: [Function: function]
// }


nullpo('foo');  // 'foo'
nullpo(123);  // 123
```

## API

```ts
export type NullpoArray = any[];
export type NullpoObject = {[k: string]: any};

declare function nullpo(args: NullpoArray): NullpoArray;
declare function nullpo(args: NullpoObject): NullpoObject;
declare function nullpo(args: any): any;

```

## Lisence

The MIT License (MIT)

Copyright (c) 2017 nju33 <nju33.ki@gmail.com>
