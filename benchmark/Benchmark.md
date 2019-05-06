# Benchmark test of @fav/text.camel-case

Comparing with following modules:

- [camel-case](https://www.npmjs.com/package/camel-case)
- [camelcase](https://www.npmjs.com/package/camelcase)
- [lodash](https://www.npmjs.com/package/lodash)

# v1.0.3

|                 | @fav/text.camel-case(1.0.3) | camel-case(3.0.0) | camelcase(5.3.1)   | lodash(4.17.11)   |
|:----------------|----------------------------:|------------------:|-------------------:|------------------:|
| Empty string    |          17,997,298 ops/sec |   602,909 ops/sec | 38,614,435 ops/sec | 5,927,622 ops/sec |
| "foo-bar"       |           2,427,993 ops/sec |   253,571 ops/sec |    710,014 ops/sec |   880,346 ops/sec |
| "--foo-bar-baz" |           1,402,874 ops/sec |   196,316 ops/sec |    463,951 ops/sec |   619,803 ops/sec |

- Platform: Node.js 12.0.0 on Darwin 64-bit
- Machine: Intel(R) Core(TM) i7-2620M CPU @ 2.70GHz, 16GB
