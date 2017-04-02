# Nullpo

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Remove falsey values from array and object

## Install

```bash
yarn add nullpo
npm i -S nullpo
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

### `nullpo(value)`

- `value`: `any`

## Lisence

The MIT License (MIT)

Copyright (c) 2017 nju33 <nju33.ki@gmail.com>
