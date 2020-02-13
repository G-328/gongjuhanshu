// 浅拷贝

// 数组实现浅拷贝
// [...arr]
// arr.slice()
// [].concat(arr)
// Arrray.from(arr)
// arr.filter(value => true)
// arr.map(item => item)
/* arr.reduce((pre, item) => {
  pre.push(item)
  return pre
}, []) */

export function clone1(target) {
  if (target instanceof Array) {
    return [...target]
  }else if (target !== null && typeof target === 'object'){
    return {...target}
  }else {
    return target
  }
}


// 利用 for in
export function clone2(target) {
  // 被处理的目标是数组/对象
  if (target instanceof Array || (target !== null && typeof target === 'object')) {
    const cloneTarget = target instanceof Array ? [] : {}
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        cloneTarget[key] = target[key]
      }
    }
    return cloneTarget
  }else {
    return target
  }
}