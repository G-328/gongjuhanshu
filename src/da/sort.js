// 三个基本的排序算法

// 冒泡排序
export function bubbleSort(arr) {
  const len = arr.length
  for (let i = 0; i < len-1; i++) { //需要在[0, i]排序
    for (let j = 0; j < len-1-i; j++) {  //依次拿出相邻的2个进行比较
      if (arr[j] > arr[j+1]) {
        var temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr 
}

// 插入排序
export function insertSort(arr) {
  const len = arr.length
  for (let i = 1; i < len; i++) { //遍历未排序的区域
    const start = arr[i]
    // 将start与左边的比较(从右向比)
    let j
    for (j = i-1; j >= 0; j--) {
      if (arr[j] > start) { // 所有比当前start大的都要向右移动一位
        arr[j+1] = arr[j]
      }else {  // 当前元素<=start
        // 将start插入到当前位置的右边
        break // 不用继续向左遍历了
      }
    }
    arr[j+1] = start

    // while循坏版
    /* let j = i - 1
    while(j>=0 && arr[j]>start) {
      arr[j+1] = arr [j]
      j--
    }
    arr[j+1] = start */
  }
  return arr 
}

/* 
选择排序的方法
*/
export function selectSort(array) {
  // 1.获取数组的长度
  var length = array.length

  // 2.外层循环: 从0位置开始取出数据, 直到length-2位置
  for (var i = 0; i < length - 1; i++) {
    // 3.内层循环: 从i+1位置开始, 和后面的内容比较
    var min = i
    for (var j = min + 1; j < length; j++) {
      // 4.如果i位置的数据大于j位置的数据, 记录最小的位置
      if (array[min] > array[j]) {
        min = j
      }
    }
    if (min !== i) {
      // 交换
      [array[min], array[i]] = [array[i], array[min]];
    }
  }
  return arr;
}
