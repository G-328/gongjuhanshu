// 将arr2与arr1的元素进行合并组成一个新的数组(不改变原数组)

export function merge(array, ...arrays) {
  const result = [...array]
  
  if (arrays.length === 0) {
    return result
  }
  arrays.forEach(itemArr => {
    itemArr.forEach(item => {
      if (result.indexOf(item) === -1) { 
        result.push(item)
      }
    })
  })
  return result
}