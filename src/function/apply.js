export function apply (fn, obj, args) {
  // console.log('apply')
  if(obj === undefined || obj === null){
    obj = windows
  }
  obj.tempFn = fn
  const result = obj.tempFn(...args)
  delete obj.tempFn
  return result
}