export function call (fn, obj, ...args) {
  // console.log('call')
  // this(...args)
  if(obj === undefined || obj === null){
    obj = windows
  }
  // 给obj添加一个方法
  obj.tempFn = fn
  // 调用obj新添加的方法
  const result = obj.tempFn(...args)
  // 删除obj上的新方法
  delete obj.tempFn
  // 返回方法的返回值
  return result 
}