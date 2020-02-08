// 数组去重

// 方法1
export function unique1(array) {
  const arr = []
  array.forEach(item => {
    if (arr.indexOf(item) === -1) {
      arr.push(item)
    }
  });
  return arr
}
// 方法2
export function unique2(array) {
  const arr = []
  const contain = {}
  array.forEach(item => {
    if (!contain.hasOwnProperty(item)) {
      arr.push(item)
      contain[item] = true
    }
  })
  return arr
}
// 方法3
export function unique3(array) {
  // return Array.from(new Set(array))
  return [...new Set(array)]
}