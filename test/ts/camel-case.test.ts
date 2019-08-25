import camelCase from '../../dist/cjs/index.js';
import assert from 'assert';

const { split, join } = camelCase;

console.log(camelCase('aaa-bbb-ccc'));
assert.equal(camelCase('aaa-bbb-ccc'), 'aaaBbbCcc');

console.log(join(split('aaa-bbb-ccc')));
assert.equal(join(split('aaa-bbb-ccc')), 'aaaBbbCcc');
