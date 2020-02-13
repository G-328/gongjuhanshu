// 深拷贝

export function deepClone1(target) {
  return JSON.parse(JSON.stringify(target))
}

// 这种会有循环引用的问题,解决了函数丢失问题
export function deepClone2(target) {
  if (target instanceof Array || (target !== null && typeof target === 'object')) {
    const cloneTarget = target instanceof Array ? [] : {}
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        // 对属性值进行递归处理
        cloneTarget[key] = deepClone2(target[key])
      }
    }
    return cloneTarget
  }else {
    return target
  }
}

// 这种解决了函数丢失和循环引用的问题
export function deepClone3(target, map = new Map()) {
  if (target instanceof Array || (target !== null && typeof target === 'object')) {
    // map中已经存在对应的克隆对象，直接将其返回
    let cloneTarget = map.get(target)
    console.log(map)
    console.log(cloneTarget)
    if (cloneTarget) {
      return cloneTarget
    }
    // 创建克隆对象
    cloneTarget = target instanceof Array ? [] : {}
    console.log(cloneTarget)
    // 保存到map容器
    map.set(target, cloneTarget)
    console.log(map)
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        // 对属性值进行递归处理
        cloneTarget[key] = deepClone3(target[key], map)
      }
    }
    return cloneTarget
  }else {
    return target
  }
}

// 优化数组遍历
export function deepClone4(target, map = new Map()) {
  if (target instanceof Array || (target !== null && typeof target === 'object')) {
    // map中已经存在对应的克隆对象，直接将其返回
    let cloneTarget = map.get(target)
    if (cloneTarget) {
      return cloneTarget
    }
    // 创建克隆对象
    if (target instanceof Array) {
      cloneTarget = []
      // 保存到map容器
      map.set(target, cloneTarget)
      // 向数组添加元素
      target.forEach((item, index) => {
        cloneTarget[index] = deepClone4(item, map)
      });
    }else {
      cloneTarget = {}
      // 保存到map容器
      map.set(target, cloneTarget)
      // 向对象添加属性
      for (const key in target) {
        if (target.hasOwnProperty(key)) {
          // 对属性值进行递归处理
          cloneTarget[key] = deepClone4(target[key], map)
        }
      }
    }
    return cloneTarget
  }else {
    return target
  }
}