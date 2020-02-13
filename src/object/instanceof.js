// 自定义instanceof工具函数

export function myInstanceof(obj, type) {
  // 得到一个原型对象
  let protoObj = obj.__proto__
  while (protoObj !== null) {
    if (protoObj === type.prototype) {
      return true
    }
    // 取出下一个原型对象并保存
    protoObj = protoObj.__proto__
  }
  return false
}