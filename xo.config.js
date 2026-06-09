/**
 * @import {FlatXoConfig} from 'xo'
 */

/** @type {FlatXoConfig} */
const xoConfig = [
  {
    name: 'default',
    prettier: true,
    rules: {
      'import-x/no-unassigned-import': 'off',
      'logical-assignment-operators': 'off',
      'max-params': 'off',
      'require-unicode-regexp': 'off',
      'unicorn/no-array-sort': 'off',
      'unicorn/require-module-specifiers': 'off'
    },
    space: true
  },
  {
    files: ['test/**/*.js'],
    rules: {
      'import/no-unassigned-import': 'off',
      'max-nested-callbacks': 'off',
      'no-await-in-loop': 'off'
    }
  }
]

export default xoConfig
