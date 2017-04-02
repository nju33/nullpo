import test from 'ava';
import nullpo from '..';

test('array', t => {
  const value = nullpo(['foo', null, '', 123, false, () => {}]);
  t.is(value.length, 3);
  t.is(value[0], 'foo');
  t.is(value[1], 123);
  t.is(typeof value[2], 'function');
});

test('object', t => {
  const value = nullpo({
    foo: 'foo',
    null: null,
    empty: '',
    number: 123,
    boolean: false,
    function() {}
  });
  t.is(Object.keys(value).length, 3);
  t.is(value.foo, 'foo');
  t.is(value.number, 123);
  t.is(typeof value.function, 'function');
  t.is(typeof value.null, 'undefined');
  t.is(typeof value.empty, 'undefined');
  t.is(typeof value.boolean, 'undefined');
});

test('other types', t => {
  t.is(nullpo('foo'), 'foo');
  t.is(nullpo(123), 123);
});
