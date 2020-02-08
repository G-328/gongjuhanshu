// 数组合并

export function concat(array, ...values) {
  const arr = [...array]
  values.forEach(value => {
    if (Array.isArray(value)) {
      arr.push(...value)
    }else {
      arr.push(value)
    }
  })
  return arr
}
