// 数组扁平化
import { reduce } from './declares'
import { concat } from './concat'

// 方法一(递归 + reduce + concat)
export function flatten1(array) {
   return reduce(array, (pre, item) => {
     if (!Array.isArray(item)) {
       pre.push(item)
     }else {
       pre = concat(pre, flatten1(item))
     }
     return pre
   }, []) 
}

// 方法二(... + some + concat)
export function flatten2(array) {
  let arr = [].concat(...array)
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}