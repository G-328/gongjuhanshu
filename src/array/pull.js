// 删除数组中与value相同的元素，返回所有删除元素的数组

export function pull(array, ...values) {
  const result = []
  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    // console.log(item)
    if (values.indexOf(item) !== -1) {
      array.splice(index, 1)
      result.push(item)
      index--
    }
  }
  return result
}

export function pullArr(array, values) {
  return pull(array, ...values)
}