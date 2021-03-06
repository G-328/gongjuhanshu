/* 
入口js
向外暴露工具函数
*/

export { call } from './function/call'
export { apply } from './function/apply'
export { bind } from './function/bind'
export { throttle } from './function/throttle'
export { debounce } from './function/debounce'

export { map, reduce, filter, find, findIndex, every, some } from './array/declares'
export { unique1, unique2, unique3 } from './array/unique'
export { concat } from './array/concat'
export { slice } from './array/slice'
export { flatten1, flatten2 } from './array/flatten'
export { compact } from './array/compact'
export { chunk } from './array/chunk'
export { difference, differences } from './array/difference'
export { merge } from './array/merge'
export { pull, pullArr } from './array/pull'
export { drop, dropRight } from './array/drop'

export { newInstance } from './object/newInstance'
export { myInstanceof } from './object/instanceof'
export { mergeObject } from './object/mergeObject'
export { clone1, clone2 } from './object/clone'
export { deepClone1, deepClone2, deepClone3, deepClone4 } from './object/deepClone'

export { reverseString, palindrome, truncate } from './string'

export { default as Stack } from './da/stack'
export { default as Queue } from './da/queue'
export { default as PriorityQueue } from './da/priority-queue'
export { bubbleSort, insertSort, selectSort } from './da/sort'