import test from 'ava';
import m from '../index';

test(t => {
    t.deepEqual(m({ 'foo': 'foo', 'bar': 'bar' }), [['foo', 'foo'],['bar', 'bar']]);
});

test(t => {
    t.deepEqual(m({ 'foo': 2, 'bar': 3 }), [['foo', 2],['bar', 3]]);
});

test(t => {
    t.deepEqual(m({ 'foo': undefined, 'bar': null }), [['foo', undefined],['bar', null]]);
});