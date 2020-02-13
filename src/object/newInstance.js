// 自定义new工具函数

export function newInstance(Fn, ...args) {
  // 创建一个空对象
  const obj = {}
  // 调用Fn函数，且指定this是新创建对象
  const result = Fn.apply(obj, args)
  // 如果Fn执行返回的是对象类型，最终的结果就是这个对象
  if (result instanceof Object) {
    return result
  }
  // 让原型对象是空的object对象，且constructor属性为Fn
  /* obj.__proto__ = {}
  obj.__proto__.constructor = Fn 
  创建的每个实列对象得到原型对象应该是同一个
  */
  obj.__proto__ = Fn.prototype
  // 返回新建对象
  return obj
}