/**
 * @import {AstSelector} from 'css-selector-parser'
 * @import {Node} from 'unist'
 */

/**
 * @typedef SelectState
 *   Current state.
 * @property {AstSelector} rootQuery
 *   Original root selectors.
 * @property {Array<Node>} results
 *   Matches.
 * @property {Array<Node>} scopeNodes
 *   Nodes in scope.
 * @property {boolean} one
 *   Whether we can stop looking after we found one node.
 * @property {boolean} shallow
 *   Whether we only allow selectors without nesting.
 * @property {boolean} found
 *   Whether we found at least one match.
 * @property {number | undefined} typeIndex
 *   Track siblings: this current node has `n` nodes with its type before it.
 * @property {number | undefined} nodeIndex
 *   Track siblings: this current node has `n` nodes before it.
 * @property {number | undefined} typeCount
 *   Track siblings: there are `n` siblings with this node’s type.
 * @property {number | undefined} nodeCount
 *   Track siblings: there are `n` siblings.
 */

export {}
