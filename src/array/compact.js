import { filter } from './declares'

// 返回数组中所有真值元素组成的新数组
export function compact(array) {
  return filter(array, item => item)
}