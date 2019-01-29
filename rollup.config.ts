/**
 * @license
 *
 */

import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import sourceMaps from 'rollup-plugin-sourcemaps'
import { eslint } from 'rollup-plugin-eslint'
import { terser } from 'rollup-plugin-terser'

const pkg = require('./package.json')
const externalDependencies = Object.keys(pkg.dependencies || {})
const peerDependencies = Object.keys(pkg.peerDependencies || {})
const extensions = ['.js', '.jsx', '.ts', '.tsx']
const NODE_ENV = process.env.NODE_ENV || 'development'

const copyright = (`/*
  * Copyright ${new Date().getFullYear()}.
  * See the accompanying LICENSE file for terms.
  */
`);

export default [
  {
    input: './src/index.ts',
    output: [
      { banner : copyright, file: pkg.module, format: 'esm' },
      { banner : copyright, file: pkg.main, format: 'cjs' },
    ],
    external: [
      ...externalDependencies,
      ...peerDependencies,
    ],
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      eslint({}),
      resolve({ extensions }),
      commonjs({}),
      babel({
        extensions,
        exclude: ['node_modules/**'],
        include: ['src/**/*']
      }),
      NODE_ENV === 'development' ? null : sourceMaps(),
      NODE_ENV === 'development' ? null : filesize({ showBrotliSize: true }),
      NODE_ENV === 'development' ? null : terser({ warnings: true, mangle: { module: true }, output: { comments: 'all' } })
    ]
  }
]


