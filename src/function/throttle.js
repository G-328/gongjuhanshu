import { call } from './call'

export function throttle(callback, delay) {
  let pre = 0
  return function (event) {
    const current = Date.now()
    if (current - pre > delay) {
      // 调用真正处理事见的函数，this是事件源event.target
      callback.call(this, event)
      pre = current 
    }
  }
}