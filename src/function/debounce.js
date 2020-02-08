export function debounce(callback, delay) {
  return function (event) {
    // if (callback.timeoutId) {} 这个会查找原型链
    if (callback.hasOwnProperty('timeoutId')) {  //不会查找原型链
      clearTimeout(callback.timeoutId)
    }
    callback.timeoutId = setTimeout(() => {
      callback.call(this, event)
      delete callback.timeoutId
    }, delay);
  }
}