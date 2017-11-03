import test from 'ava';
import m from '../index';

test(t => {
    t.deepEqual(m({ foo: 'foo', bar: 'bar' }), ['foo', 'bar']);
});