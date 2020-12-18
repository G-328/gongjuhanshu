/* 
目录、
1.两个数组求交集
2.分割指定长度的元素数组
3.函数柯里化
4.获取当前子元素是其父元素下子元素的排位
5.判断当前是否是移动端
*/


// 两个数组求交集
{
  // 第一种
  const arr1 = [
    { a: 1, b: 22 },
    { a: 3, b: 33 },
    { a: 4, b: 44 },
  ];
  const arr2 = [
    { a: 1, b: 22 },
    { a: 2, b: 13 },
    { a: 4, b: 44 },
  ];
  console.log(arr1.filter((_) => arr2.some((el) => el.a === _.a))) //[{a: 1, b: 22}, {a: 4, b: 44}]
  // 第二种
  const interp = (list, ...args) => list.filter(item => args.every(list => list.includes(item)))
  console.log(interp([2, 1], [2, 3])) // [2]
  console.log(interp([1, 2], [3, 4])) // []
}

// 分割指定长度的元素数组
{
  const listChunk = (list, size = 1, cacheList = []) => {
    const tmp = [...list]
    if (size <= 0) {
      return cacheList
    }
    while(tmp.length) {
      cacheList.push(tmp.splice(0, size))
    }
    return cacheList
  }
  console.log(listChunk([1, 2, 3, 4, 5, 6]))
  console.log(listChunk([1, 2, 3, 4, 5, 6], 2))
}

// 函数柯里化
{
  const curring = fn => {
    const { length } = fn
    console.log(length, fn)
    const curried = (...args) => {
      console.log(...args)
      return (args.length >= length ? fn(...args) : (...args2) => curried(...args.concat(args2)))
    }
    return curried
  }
  const listMerge = (a, b, c) => [a, b, c]
  const curried = curring(listMerge)
  console.log("函数柯里化")
  console.log(curried)
  console.log(curried(1)(2)(3))
  // console.log(curried(1, 2)(3))
  // console.log(curried(1, 2, 3))
}

// 获取当前子元素是其父元素下子元素的排位
{
  const getIndex = el => {
    if (!el) {
      return -1
    }
    let index = 0
    do {
      index++
    } while (el = el.preiousElementSibling)
    return index 
  }
}

// 判断当前是否是移动端
{
  const isMobile = () => 'ontouchstart' in window
  console.log(isMobile)
}
