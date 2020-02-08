import { call } from './call'

export function bind (fn, obj, ...args) {
  // console.log('bind`')
  // 返回一个新函数
  return (...args2) => {
    //调用原来的函数，指定this为obj，参数列表由args和args2依次组成
    return call(fn, obj, ...args, ...args2)
  }
}