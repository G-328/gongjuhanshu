/* 
自定义栈类型
使用数组封装
  压栈：push()
  出栈：pop()
  查看栈：peek()
  栈中元素个数：size()
  是否是空栈：isEmpty()
*/

function Stack() {
  //  用于保存元素数据的数组
  const arr = []

  /* 
  1.如果不判断，问题是创建多个stack总是使用最后创建的arr
  2.如果有判断，问题是创建多个stack总是使用第一个创建的arr
  */
  
  // 压栈：push()
  this.push = function (element) {
    arr.push(element)
  }

  // 出栈：pop()
  this.pop = function () {
    return arr.pop()
    // arr.splice(arr.length-1, 1)
  }

  // 查看栈：peek()
  this.peek = function () {
    return arr[arr.length - 1]
  }

  // 栈中元素个数：size()
  this.size = function () {
    return arr.length
  }

  // 是否是空栈：isEmpty()
  this.isEmpty = function () {
    return arr.length === 0
  }
}

export default Stack