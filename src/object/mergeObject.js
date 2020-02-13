import { concat } from '../array/concat'

// 合并多个对象

export function mergeObject(...objs) {
  const result = {}
  objs.forEach(obj => {
    Object.keys(obj).forEach(key => {
      const value = obj[key]
      // result中没有key的属性
      if (!result.hasOwnProperty(key)) {
        result[key] = value
      }else { // result中有key的属性
        // 对原值和value进行合并生成新的数组
        result[key] = concat([], result[key], value)
      }
    })
  })
  return result
}