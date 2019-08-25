const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const { terser } = require('rollup-plugin-terser');
const copy = require('rollup-plugin-copy');
const cp = require('copy');

export default [
  {
    input: './src/index.mjs',
    output: {
      format: 'cjs',
      file: './dist/cjs/index.js',
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      babel({
        plugins: [
          "@babel/plugin-transform-block-scoping",
        ],
      }),
      copy({
        targets: [
          { src: 'src/index.d.ts', dest: 'dist/cjs/' },
        ],
      }),
    ],
  },

  {
    input: './src/index.mjs',
    output: {
      format: 'iife',
      file: 'dist/web/fav.text.camel-case.min.js',
      name: 'fav.text.camelCase',
      sourcemap: true,
    },
    plugins: [
      nodeResolve(),
      babel({
        plugins: [
          "@babel/plugin-transform-block-scoping",
        ],
      }),
      terser({
        sourcemap: true,
      }),
    ],
  },
];

cp('src/**.mjs', 'dist/esm/', function() {});
