// 切片

export function slice(array, begin, end) {
  const arr = []
  if (array.length === 0) {
    return arr
  }
  begin = begin || 0
  end = end || array.length
  if (begin < 0) {
    begin = 0
  }
  if (end > array.length) {
    end = array.length
  }
  for (let index = begin; index < end; index++) {
    arr.push(array[index]);
  }
  return arr
}