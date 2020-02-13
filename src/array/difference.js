import { filter } from './declares'

// 得到当前数组中所有不在arr中的元素组成的数组(不改变原数组)
export function difference(array1, array2) {
  
  // 处理特殊情况
  if (array1.length === 0) {
    return []
  }else if (array2.length === 0) {
    return [...array1]
  }

  // 对数组进行过滤 
  return filter(array1, item => array2.indexOf(item) === -1)
}

export function differences(array1, ...arrays) {
  
  // 处理特殊情况
  if (array1.length === 0) {
    return []
  }else if (arrays.length === 0) {
    return [...array1]
  }

  // 对数组进行过滤 
  return filter(array1, item => {
    // 假设当前元素在后面的所有数组都不存在
    let result = true
    /* arrays.forEach(array => {
      const index = array.indexOf(item)
      if (index !== -1) {
        result = false
      }
    }) */
    for (let index = 0; index < arrays.length; index++) {
      const array = arrays[index];
      if (array.indexOf(item) !== -1) {
        // console.log(item)
        result = false
        break //结束当前循环
      }
    }
    return result
  })
}