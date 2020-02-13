/* 
希尔排序
1.计算出一系列增量数组(折半法)：
  递减，最后一个必须是1
  distance = length
  distance = Math.floor(distance/2)
2.以当前增量对数组进行分组，分成多个小数组
  对每个小数组进行插入排序
  每个小数组排序是交替进行
*/
function shellSort(arr) {
  const len = arr.length
  let distance = len
  while (distance > 1) {
    distance = Math.floor(distance/2)
    for (let i = distance; i < len; i++) {
      const start = arr[i]
      let j = i - distance
      while (j>=0 && arr[j]>start) {
        arr[j+distance] = arr[j]
        j -= distance
      }
      arr[j+distance] = start
    }
  }
  return arr
}

let a = shellSort([1, 2, 5, 6, 2, 4])
console.log(a)