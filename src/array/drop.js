// 得到数组过滤掉左边count个后剩余元素组成的数组(不改变当前数组，count默认为1)

export function drop(array, count=1) {
  if (array.length === 0) {
    return []
  }
  if (count < 1) {
    count = 1
  }
  return array.filter((item, index) => index >= count)
}

export function dropRight(array, count=1) {
  if (array.length === 0) {
    return []
  }
  if (count < 1) {
    count = 1
  }
  return array.filter((item, index) => index < array.length - count)
}