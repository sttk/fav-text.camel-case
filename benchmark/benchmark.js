'use strict';

const BenchmarkTester = require('benchmark-tester');

new BenchmarkTester()
  .addTest('@fav/text.camel-case', (camelCase, data) => {
    return camelCase(data);
  })
  .addTest('camel-case', (camelCase, data) => {
    return camelCase(data);
  })
  .addTest('camelcase', (camelCase, data) => {
    return camelCase(data);
  })
  .addTest('lodash', (lodash, data) => {
    return lodash.camelCase(data);
  })
  .runTest('Empty string', '')
  .runTest('"foo-bar"', 'foo-bar')
  .runTest('"--foo-bar-baz"', '--foo-bar-baz')
  .print();
