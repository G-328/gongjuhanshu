(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["aUtils"] = factory();
	else
		root["aUtils"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/mian.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/*! exports provided: chunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chunk\", function() { return chunk; });\n// 将数组拆分成多个 size 长度的区块，每个区块组成小数组，整体组成一个二维数组\r\n\r\nfunction chunk(array, size=1) {\r\n  const bigArr = []\r\n  let smallArr = []\r\n\r\n  // 如果是空数组\r\n  if (array.length === 0) {\r\n    return bigArr\r\n  }\r\n  // 处理size\r\n  if (size < 1) {\r\n    size = 1\r\n  }else if (size > array.length) {\r\n    size = array.length\r\n  }\r\n\r\n  array.forEach(item => {\r\n    // 将小数组放到大数组\r\n    if (smallArr.length === 0) {\r\n      bigArr.push(smallArr)\r\n    }\r\n    // 将元素添加到小数组\r\n    smallArr.push(item)\r\n    // 限制smallArr的最大长度是size\r\n    if (smallArr.length === size) {\r\n      smallArr = []\r\n    }\r\n  })\r\n  return bigArr\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/compact.js":
/*!******************************!*\
  !*** ./src/array/compact.js ***!
  \******************************/
/*! exports provided: compact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compact\", function() { return compact; });\n/* harmony import */ var _declares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declares */ \"./src/array/declares.js\");\n\r\n\r\n// 返回数组中所有真值元素组成的新数组\r\nfunction compact(array) {\r\n  return Object(_declares__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(array, item => item)\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/compact.js?");

/***/ }),

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/*! exports provided: concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return concat; });\n// 数组合并\r\n\r\nfunction concat(array, ...values) {\r\n  const arr = [...array]\r\n  values.forEach(value => {\r\n    if (Array.isArray(value)) {\r\n      arr.push(...value)\r\n    }else {\r\n      arr.push(value)\r\n    }\r\n  })\r\n  return arr\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/declares.js":
/*!*******************************!*\
  !*** ./src/array/declares.js ***!
  \*******************************/
/*! exports provided: map, reduce, filter, find, findIndex, every, some */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return reduce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return filter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return find; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return findIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return every; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return some; });\nfunction map(array, callback) {\r\n  const arr = []\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element, index)\r\n    arr.push(result)\r\n  }\r\n  return arr\r\n}\r\nfunction reduce(array, callback, initValue) {\r\n  let result = initValue\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    result = callback(result, element, index)\r\n  }\r\n  return result\r\n}\r\nfunction filter(array, callback) {\r\n  let arr = []\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element, index)\r\n    if (result) {\r\n      arr.push(element)\r\n    }\r\n  }\r\n  return arr\r\n}\r\nfunction find(array, callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element, index)\r\n    if (result) {\r\n      return element\r\n    }\r\n  }\r\n  return undefined\r\n}\r\nfunction findIndex(array, callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element, index)\r\n    if (result) {\r\n      return index\r\n    }\r\n  }\r\n  return undefined\r\n}\r\nfunction every(array, callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element, index)\r\n    if (!result) {\r\n      return false\r\n    }\r\n  }\r\n  return true\r\n}\r\nfunction some(array, callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element, index)\r\n    if (result) {\r\n      return true\r\n    }\r\n  }\r\n  return false\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/declares.js?");

/***/ }),

/***/ "./src/array/difference.js":
/*!*********************************!*\
  !*** ./src/array/difference.js ***!
  \*********************************/
/*! exports provided: difference, differences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return difference; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"differences\", function() { return differences; });\n/* harmony import */ var _declares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declares */ \"./src/array/declares.js\");\n\r\n\r\n// 得到当前数组中所有不在arr中的元素组成的数组(不改变原数组)\r\nfunction difference(array1, array2) {\r\n  \r\n  // 处理特殊情况\r\n  if (array1.length === 0) {\r\n    return []\r\n  }else if (array2.length === 0) {\r\n    return [...array1]\r\n  }\r\n\r\n  // 对数组进行过滤 \r\n  return Object(_declares__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(array1, item => array2.indexOf(item) === -1)\r\n}\r\n\r\nfunction differences(array1, ...arrays) {\r\n  \r\n  // 处理特殊情况\r\n  if (array1.length === 0) {\r\n    return []\r\n  }else if (arrays.length === 0) {\r\n    return [...array1]\r\n  }\r\n\r\n  // 对数组进行过滤 \r\n  return Object(_declares__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(array1, item => {\r\n    // 假设当前元素在后面的所有数组都不存在\r\n    let result = true\r\n    /* arrays.forEach(array => {\r\n      const index = array.indexOf(item)\r\n      if (index !== -1) {\r\n        result = false\r\n      }\r\n    }) */\r\n    for (let index = 0; index < arrays.length; index++) {\r\n      const array = arrays[index];\r\n      if (array.indexOf(item) !== -1) {\r\n        // console.log(item)\r\n        result = false\r\n        break //结束当前循环\r\n      }\r\n    }\r\n    return result\r\n  })\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/difference.js?");

/***/ }),

/***/ "./src/array/drop.js":
/*!***************************!*\
  !*** ./src/array/drop.js ***!
  \***************************/
/*! exports provided: drop, dropRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drop\", function() { return drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropRight\", function() { return dropRight; });\n// 得到数组过滤掉左边count个后剩余元素组成的数组(不改变当前数组，count默认为1)\r\n\r\nfunction drop(array, count=1) {\r\n  if (array.length === 0) {\r\n    return []\r\n  }\r\n  if (count < 1) {\r\n    count = 1\r\n  }\r\n  return array.filter((item, index) => index >= count)\r\n}\r\n\r\nfunction dropRight(array, count=1) {\r\n  if (array.length === 0) {\r\n    return []\r\n  }\r\n  if (count < 1) {\r\n    count = 1\r\n  }\r\n  return array.filter((item, index) => index < array.length - count)\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/drop.js?");

/***/ }),

/***/ "./src/array/flatten.js":
/*!******************************!*\
  !*** ./src/array/flatten.js ***!
  \******************************/
/*! exports provided: flatten1, flatten2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return flatten1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return flatten2; });\n/* harmony import */ var _declares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declares */ \"./src/array/declares.js\");\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat */ \"./src/array/concat.js\");\n// 数组扁平化\r\n\r\n\r\n\r\n// 方法一(递归 + reduce + concat)\r\nfunction flatten1(array) {\r\n   return Object(_declares__WEBPACK_IMPORTED_MODULE_0__[\"reduce\"])(array, (pre, item) => {\r\n     if (!Array.isArray(item)) {\r\n       pre.push(item)\r\n     }else {\r\n       pre = Object(_concat__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])(pre, flatten1(item))\r\n     }\r\n     return pre\r\n   }, []) \r\n}\r\n\r\n// 方法二(... + some + concat)\r\nfunction flatten2(array) {\r\n  let arr = [].concat(...array)\r\n  while(arr.some(item => Array.isArray(item))) {\r\n    arr = [].concat(...arr)\r\n  }\r\n  return arr\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/flatten.js?");

/***/ }),

/***/ "./src/array/merge.js":
/*!****************************!*\
  !*** ./src/array/merge.js ***!
  \****************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"merge\", function() { return merge; });\n// 将arr2与arr1的元素进行合并组成一个新的数组(不改变原数组)\r\n\r\nfunction merge(array, ...arrays) {\r\n  const result = [...array]\r\n  \r\n  if (arrays.length === 0) {\r\n    return result\r\n  }\r\n  arrays.forEach(itemArr => {\r\n    itemArr.forEach(item => {\r\n      if (result.indexOf(item) === -1) { \r\n        result.push(item)\r\n      }\r\n    })\r\n  })\r\n  return result\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/merge.js?");

/***/ }),

/***/ "./src/array/pull.js":
/*!***************************!*\
  !*** ./src/array/pull.js ***!
  \***************************/
/*! exports provided: pull, pullArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pull\", function() { return pull; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pullArr\", function() { return pullArr; });\n// 删除数组中与value相同的元素，返回所有删除元素的数组\r\n\r\nfunction pull(array, ...values) {\r\n  const result = []\r\n  for (let index = 0; index < array.length; index++) {\r\n    const item = array[index];\r\n    // console.log(item)\r\n    if (values.indexOf(item) !== -1) {\r\n      array.splice(index, 1)\r\n      result.push(item)\r\n      index--\r\n    }\r\n  }\r\n  return result\r\n}\r\n\r\nfunction pullArr(array, values) {\r\n  return pull(array, ...values)\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/pull.js?");

/***/ }),

/***/ "./src/array/slice.js":
/*!****************************!*\
  !*** ./src/array/slice.js ***!
  \****************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return slice; });\n// 切片\r\n\r\nfunction slice(array, begin, end) {\r\n  const arr = []\r\n  if (array.length === 0) {\r\n    return arr\r\n  }\r\n  begin = begin || 0\r\n  end = end || array.length\r\n  if (begin < 0) {\r\n    begin = 0\r\n  }\r\n  if (end > array.length) {\r\n    end = array.length\r\n  }\r\n  for (let index = begin; index < end; index++) {\r\n    arr.push(array[index]);\r\n  }\r\n  return arr\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/slice.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*\
  !*** ./src/array/unique.js ***!
  \*****************************/
/*! exports provided: unique1, unique2, unique3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return unique1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return unique2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique3\", function() { return unique3; });\n// 数组去重\r\n\r\n// 方法1\r\nfunction unique1(array) {\r\n  const arr = []\r\n  array.forEach(item => {\r\n    if (arr.indexOf(item) === -1) {\r\n      arr.push(item)\r\n    }\r\n  });\r\n  return arr\r\n}\r\n// 方法2\r\nfunction unique2(array) {\r\n  const arr = []\r\n  const contain = {}\r\n  array.forEach(item => {\r\n    if (!contain.hasOwnProperty(item)) {\r\n      arr.push(item)\r\n      contain[item] = true\r\n    }\r\n  })\r\n  return arr\r\n}\r\n// 方法3\r\nfunction unique3(array) {\r\n  // return Array.from(new Set(array))\r\n  return [...new Set(array)]\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/unique.js?");

/***/ }),

/***/ "./src/da/priority-queue.js":
/*!**********************************!*\
  !*** ./src/da/priority-queue.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* \r\n自定义队列类型 优先级队列\r\n*/\r\n\r\nfunction PriorityQueue() {\r\n  //  用于保存元素数据的数组\r\n  const arr = []  // 保存的元素结构：{data, priority}\r\n\r\n  // 队列每个元素的类型\r\n  function QueueElement(data, priority) {\r\n    this.data = data\r\n    this.priority = priority\r\n  }\r\n  \r\n  // 入队列：enqueue()\r\n  this.enqueue = function (data, priority) {\r\n    // 要求priority在[0, 100]之间，否则抛出异常\r\n    if (priority<0 || priority>100) {\r\n      throw new Error('优先级值必须在0-100')\r\n    }\r\n    // 创建一个新的元素/\r\n    const element = new QueueElement(data, priority)\r\n    // 将element添加到内部的arr中\r\n    // 如果当前是空的，直接添加\r\n    if (arr.length === 0) {\r\n      arr.push(element)\r\n    }else {\r\n    // 将当前elemenet插入到合适位置：在priority值大于当前值的左边\r\n      for (let index = 0; index < arr.length; index++) {\r\n        if (arr[index].priority > priority) {\r\n          arr.splice(index, 0, element)\r\n          return \r\n        }\r\n      }\r\n      // 当前要添加的priority是最大的\r\n      arr.push(element)\r\n    }\r\n  }\r\n\r\n  // 出队列：dequeue()\r\n  this.dequeue = function () {\r\n    return arr.shift()\r\n  }\r\n\r\n  // 查看队头：front()\r\n  this.front = function () {\r\n    return arr[0]\r\n  }\r\n\r\n  // 查看元素的个数：size()\r\n  this.size = function () {\r\n    return arr.length\r\n  }\r\n\r\n  // 判断队列是否为空：isEmpty()\r\n  this.isEmpty = function () {\r\n    return arr.length === 0\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (PriorityQueue);\n\n//# sourceURL=webpack://aUtils/./src/da/priority-queue.js?");

/***/ }),

/***/ "./src/da/queue.js":
/*!*************************!*\
  !*** ./src/da/queue.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* \r\n自定义队列类型 Queue\r\n  入队列：enqueue()\r\n  出队列：dequeue()\r\n  查看队头：front()\r\n  查看元素的个数：size()\r\n  判断队列是否为空：isEmpty()\r\n*/\r\n\r\nfunction Queue() {\r\n  //  用于保存元素数据的数组\r\n  const arr = []\r\n  \r\n  // 入队列：enqueue()\r\n  this.enqueue = function (element) {\r\n    arr.push(element)\r\n  }\r\n\r\n  // 出队列：dequeue()\r\n  this.dequeue = function () {\r\n    return arr.shift()\r\n  }\r\n\r\n  // 查看队头：front()\r\n  this.front = function () {\r\n    return arr[0]\r\n  }\r\n\r\n  // 查看元素的个数：size()\r\n  this.size = function () {\r\n    return arr.length\r\n  }\r\n\r\n  // 判断队列是否为空：isEmpty()\r\n  this.isEmpty = function () {\r\n    return arr.length === 0\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Queue);\n\n//# sourceURL=webpack://aUtils/./src/da/queue.js?");

/***/ }),

/***/ "./src/da/sort.js":
/*!************************!*\
  !*** ./src/da/sort.js ***!
  \************************/
/*! exports provided: bubbleSort, insertSort, selectSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bubbleSort\", function() { return bubbleSort; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertSort\", function() { return insertSort; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectSort\", function() { return selectSort; });\n// 三个基本的排序算法\r\n\r\n// 冒泡排序\r\nfunction bubbleSort(arr) {\r\n  const len = arr.length\r\n  for (let i = 0; i < len-1; i++) { //需要在[0, i]排序\r\n    for (let j = 0; j < len-1-i; j++) {  //依次拿出相邻的2个进行比较\r\n      if (arr[j] > arr[j+1]) {\r\n        var temp = arr[j]\r\n        arr[j] = arr[j+1]\r\n        arr[j+1] = temp\r\n      }\r\n    }\r\n  }\r\n  return arr \r\n}\r\n\r\n// 插入排序\r\nfunction insertSort(arr) {\r\n  const len = arr.length\r\n  for (let i = 1; i < len; i++) { //遍历未排序的区域\r\n    const start = arr[i]\r\n    // 将start与左边的比较(从右向比)\r\n    let j\r\n    for (j = i-1; j >= 0; j--) {\r\n      if (arr[j] > start) { // 所有比当前start大的都要向右移动一位\r\n        arr[j+1] = arr[j]\r\n      }else {  // 当前元素<=start\r\n        // 将start插入到当前位置的右边\r\n        break // 不用继续向左遍历了\r\n      }\r\n    }\r\n    arr[j+1] = start\r\n\r\n    // while循坏版\r\n    /* let j = i - 1\r\n    while(j>=0 && arr[j]>start) {\r\n      arr[j+1] = arr [j]\r\n      j--\r\n    }\r\n    arr[j+1] = start */\r\n  }\r\n  return arr \r\n}\r\n\r\n/* \r\n选择排序的方法\r\n*/\r\nfunction selectSort(array) {\r\n  // 1.获取数组的长度\r\n  var length = array.length\r\n\r\n  // 2.外层循环: 从0位置开始取出数据, 直到length-2位置\r\n  for (var i = 0; i < length - 1; i++) {\r\n    // 3.内层循环: 从i+1位置开始, 和后面的内容比较\r\n    var min = i\r\n    for (var j = min + 1; j < length; j++) {\r\n      // 4.如果i位置的数据大于j位置的数据, 记录最小的位置\r\n      if (array[min] > array[j]) {\r\n        min = j\r\n      }\r\n    }\r\n    if (min !== i) {\r\n      // 交换\r\n      [array[min], array[i]] = [array[i], array[min]];\r\n    }\r\n  }\r\n  return arr;\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/da/sort.js?");

/***/ }),

/***/ "./src/da/stack.js":
/*!*************************!*\
  !*** ./src/da/stack.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* \r\n自定义栈类型\r\n使用数组封装\r\n  压栈：push()\r\n  出栈：pop()\r\n  查看栈：peek()\r\n  栈中元素个数：size()\r\n  是否是空栈：isEmpty()\r\n*/\r\n\r\nfunction Stack() {\r\n  //  用于保存元素数据的数组\r\n  const arr = []\r\n\r\n  /* \r\n  1.如果不判断，问题是创建多个stack总是使用最后创建的arr\r\n  2.如果有判断，问题是创建多个stack总是使用第一个创建的arr\r\n  */\r\n  \r\n  // 压栈：push()\r\n  this.push = function (element) {\r\n    arr.push(element)\r\n  }\r\n\r\n  // 出栈：pop()\r\n  this.pop = function () {\r\n    return arr.pop()\r\n    // arr.splice(arr.length-1, 1)\r\n  }\r\n\r\n  // 查看栈：peek()\r\n  this.peek = function () {\r\n    return arr[arr.length - 1]\r\n  }\r\n\r\n  // 栈中元素个数：size()\r\n  this.size = function () {\r\n    return arr.length\r\n  }\r\n\r\n  // 是否是空栈：isEmpty()\r\n  this.isEmpty = function () {\r\n    return arr.length === 0\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stack);\n\n//# sourceURL=webpack://aUtils/./src/da/stack.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/*! exports provided: apply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return apply; });\nfunction apply (fn, obj, args) {\r\n  // console.log('apply')\r\n  if(obj === undefined || obj === null){\r\n    obj = windows\r\n  }\r\n  obj.tempFn = fn\r\n  const result = obj.tempFn(...args)\r\n  delete obj.tempFn\r\n  return result\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/*! exports provided: bind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return bind; });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\n\r\nfunction bind (fn, obj, ...args) {\r\n  // console.log('bind`')\r\n  // 返回一个新函数\r\n  return (...args2) => {\r\n    //调用原来的函数，指定this为obj，参数列表由args和args2依次组成\r\n    return Object(_call__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(fn, obj, ...args, ...args2)\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/*! exports provided: call */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return call; });\nfunction call (fn, obj, ...args) {\r\n  // console.log('call')\r\n  // this(...args)\r\n  if(obj === undefined || obj === null){\r\n    obj = windows\r\n  }\r\n  // 给obj添加一个方法\r\n  obj.tempFn = fn\r\n  // 调用obj新添加的方法\r\n  const result = obj.tempFn(...args)\r\n  // 删除obj上的新方法\r\n  delete obj.tempFn\r\n  // 返回方法的返回值\r\n  return result \r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\nfunction debounce(callback, delay) {\r\n  return function (event) {\r\n    // if (callback.timeoutId) {} 这个会查找原型链\r\n    if (callback.hasOwnProperty('timeoutId')) {  //不会查找原型链\r\n      clearTimeout(callback.timeoutId)\r\n    }\r\n    callback.timeoutId = setTimeout(() => {\r\n      callback.call(this, event)\r\n      delete callback.timeoutId\r\n    }, delay);\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/*! exports provided: throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\n\r\nfunction throttle(callback, delay) {\r\n  let pre = 0\r\n  return function (event) {\r\n    const current = Date.now()\r\n    if (current - pre > delay) {\r\n      // 调用真正处理事见的函数，this是事件源event.target\r\n      callback.call(this, event)\r\n      pre = current \r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/mian.js":
/*!*********************!*\
  !*** ./src/mian.js ***!
  \*********************/
/*! exports provided: call, apply, bind, throttle, debounce, map, reduce, filter, find, findIndex, every, some, unique1, unique2, unique3, concat, slice, flatten1, flatten2, compact, chunk, difference, differences, merge, pull, pullArr, drop, dropRight, newInstance, myInstanceof, mergeObject, clone1, clone2, deepClone1, deepClone2, deepClone3, deepClone4, reverseString, palindrome, truncate, Stack, Queue, PriorityQueue, bubbleSort, insertSort, selectSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return _function_call__WEBPACK_IMPORTED_MODULE_0__[\"call\"]; });\n\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return _function_apply__WEBPACK_IMPORTED_MODULE_1__[\"apply\"]; });\n\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return _function_bind__WEBPACK_IMPORTED_MODULE_2__[\"bind\"]; });\n\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return _function_throttle__WEBPACK_IMPORTED_MODULE_3__[\"throttle\"]; });\n\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return _function_debounce__WEBPACK_IMPORTED_MODULE_4__[\"debounce\"]; });\n\n/* harmony import */ var _array_declares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/declares */ \"./src/array/declares.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"map\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"reduce\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"filter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"find\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"findIndex\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"every\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"some\"]; });\n\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique3\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique3\"]; });\n\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return _array_concat__WEBPACK_IMPORTED_MODULE_7__[\"concat\"]; });\n\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return _array_slice__WEBPACK_IMPORTED_MODULE_8__[\"slice\"]; });\n\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_9__[\"flatten1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_9__[\"flatten2\"]; });\n\n/* harmony import */ var _array_compact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/compact */ \"./src/array/compact.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compact\", function() { return _array_compact__WEBPACK_IMPORTED_MODULE_10__[\"compact\"]; });\n\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"chunk\", function() { return _array_chunk__WEBPACK_IMPORTED_MODULE_11__[\"chunk\"]; });\n\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return _array_difference__WEBPACK_IMPORTED_MODULE_12__[\"difference\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"differences\", function() { return _array_difference__WEBPACK_IMPORTED_MODULE_12__[\"differences\"]; });\n\n/* harmony import */ var _array_merge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array/merge */ \"./src/array/merge.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"merge\", function() { return _array_merge__WEBPACK_IMPORTED_MODULE_13__[\"merge\"]; });\n\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pull\", function() { return _array_pull__WEBPACK_IMPORTED_MODULE_14__[\"pull\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pullArr\", function() { return _array_pull__WEBPACK_IMPORTED_MODULE_14__[\"pullArr\"]; });\n\n/* harmony import */ var _array_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"drop\", function() { return _array_drop__WEBPACK_IMPORTED_MODULE_15__[\"drop\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dropRight\", function() { return _array_drop__WEBPACK_IMPORTED_MODULE_15__[\"dropRight\"]; });\n\n/* harmony import */ var _object_newInstance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./object/newInstance */ \"./src/object/newInstance.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"newInstance\", function() { return _object_newInstance__WEBPACK_IMPORTED_MODULE_16__[\"newInstance\"]; });\n\n/* harmony import */ var _object_instanceof__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./object/instanceof */ \"./src/object/instanceof.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"myInstanceof\", function() { return _object_instanceof__WEBPACK_IMPORTED_MODULE_17__[\"myInstanceof\"]; });\n\n/* harmony import */ var _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./object/mergeObject */ \"./src/object/mergeObject.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeObject\", function() { return _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__[\"mergeObject\"]; });\n\n/* harmony import */ var _object_clone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./object/clone */ \"./src/object/clone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clone1\", function() { return _object_clone__WEBPACK_IMPORTED_MODULE_19__[\"clone1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clone2\", function() { return _object_clone__WEBPACK_IMPORTED_MODULE_19__[\"clone2\"]; });\n\n/* harmony import */ var _object_deepClone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./object/deepClone */ \"./src/object/deepClone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone1\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone2\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone3\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone3\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone4\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone4\"]; });\n\n/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./string */ \"./src/string/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reverseString\", function() { return _string__WEBPACK_IMPORTED_MODULE_21__[\"reverseString\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"palindrome\", function() { return _string__WEBPACK_IMPORTED_MODULE_21__[\"palindrome\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"truncate\", function() { return _string__WEBPACK_IMPORTED_MODULE_21__[\"truncate\"]; });\n\n/* harmony import */ var _da_stack__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./da/stack */ \"./src/da/stack.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Stack\", function() { return _da_stack__WEBPACK_IMPORTED_MODULE_22__[\"default\"]; });\n\n/* harmony import */ var _da_queue__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./da/queue */ \"./src/da/queue.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Queue\", function() { return _da_queue__WEBPACK_IMPORTED_MODULE_23__[\"default\"]; });\n\n/* harmony import */ var _da_priority_queue__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./da/priority-queue */ \"./src/da/priority-queue.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PriorityQueue\", function() { return _da_priority_queue__WEBPACK_IMPORTED_MODULE_24__[\"default\"]; });\n\n/* harmony import */ var _da_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./da/sort */ \"./src/da/sort.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bubbleSort\", function() { return _da_sort__WEBPACK_IMPORTED_MODULE_25__[\"bubbleSort\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"insertSort\", function() { return _da_sort__WEBPACK_IMPORTED_MODULE_25__[\"insertSort\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"selectSort\", function() { return _da_sort__WEBPACK_IMPORTED_MODULE_25__[\"selectSort\"]; });\n\n/* \r\n入口js\r\n向外暴露工具函数\r\n*/\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/mian.js?");

/***/ }),

/***/ "./src/object/clone.js":
/*!*****************************!*\
  !*** ./src/object/clone.js ***!
  \*****************************/
/*! exports provided: clone1, clone2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clone1\", function() { return clone1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clone2\", function() { return clone2; });\n// 浅拷贝\r\n\r\n// 数组实现浅拷贝\r\n// [...arr]\r\n// arr.slice()\r\n// [].concat(arr)\r\n// Arrray.from(arr)\r\n// arr.filter(value => true)\r\n// arr.map(item => item)\r\n/* arr.reduce((pre, item) => {\r\n  pre.push(item)\r\n  return pre\r\n}, []) */\r\n\r\nfunction clone1(target) {\r\n  if (target instanceof Array) {\r\n    return [...target]\r\n  }else if (target !== null && typeof target === 'object'){\r\n    return {...target}\r\n  }else {\r\n    return target\r\n  }\r\n}\r\n\r\n\r\n// 利用 for in\r\nfunction clone2(target) {\r\n  // 被处理的目标是数组/对象\r\n  if (target instanceof Array || (target !== null && typeof target === 'object')) {\r\n    const cloneTarget = target instanceof Array ? [] : {}\r\n    for (const key in target) {\r\n      if (target.hasOwnProperty(key)) {\r\n        cloneTarget[key] = target[key]\r\n      }\r\n    }\r\n    return cloneTarget\r\n  }else {\r\n    return target\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/object/clone.js?");

/***/ }),

/***/ "./src/object/deepClone.js":
/*!*********************************!*\
  !*** ./src/object/deepClone.js ***!
  \*********************************/
/*! exports provided: deepClone1, deepClone2, deepClone3, deepClone4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone1\", function() { return deepClone1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone2\", function() { return deepClone2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone3\", function() { return deepClone3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone4\", function() { return deepClone4; });\n// 深拷贝\r\n\r\nfunction deepClone1(target) {\r\n  return JSON.parse(JSON.stringify(target))\r\n}\r\n\r\n// 这种会有循环引用的问题,解决了函数丢失问题\r\nfunction deepClone2(target) {\r\n  if (target instanceof Array || (target !== null && typeof target === 'object')) {\r\n    const cloneTarget = target instanceof Array ? [] : {}\r\n    for (const key in target) {\r\n      if (target.hasOwnProperty(key)) {\r\n        // 对属性值进行递归处理\r\n        cloneTarget[key] = deepClone2(target[key])\r\n      }\r\n    }\r\n    return cloneTarget\r\n  }else {\r\n    return target\r\n  }\r\n}\r\n\r\n// 这种解决了函数丢失和循环引用的问题\r\nfunction deepClone3(target, map = new Map()) {\r\n  if (target instanceof Array || (target !== null && typeof target === 'object')) {\r\n    // map中已经存在对应的克隆对象，直接将其返回\r\n    let cloneTarget = map.get(target)\r\n    console.log(map)\r\n    console.log(cloneTarget)\r\n    if (cloneTarget) {\r\n      return cloneTarget\r\n    }\r\n    // 创建克隆对象\r\n    cloneTarget = target instanceof Array ? [] : {}\r\n    console.log(cloneTarget)\r\n    // 保存到map容器\r\n    map.set(target, cloneTarget)\r\n    console.log(map)\r\n    for (const key in target) {\r\n      if (target.hasOwnProperty(key)) {\r\n        // 对属性值进行递归处理\r\n        cloneTarget[key] = deepClone3(target[key], map)\r\n      }\r\n    }\r\n    return cloneTarget\r\n  }else {\r\n    return target\r\n  }\r\n}\r\n\r\n// 优化数组遍历\r\nfunction deepClone4(target, map = new Map()) {\r\n  if (target instanceof Array || (target !== null && typeof target === 'object')) {\r\n    // map中已经存在对应的克隆对象，直接将其返回\r\n    let cloneTarget = map.get(target)\r\n    if (cloneTarget) {\r\n      return cloneTarget\r\n    }\r\n    // 创建克隆对象\r\n    if (target instanceof Array) {\r\n      cloneTarget = []\r\n      // 保存到map容器\r\n      map.set(target, cloneTarget)\r\n      // 向数组添加元素\r\n      target.forEach((item, index) => {\r\n        cloneTarget[index] = deepClone4(item, map)\r\n      });\r\n    }else {\r\n      cloneTarget = {}\r\n      // 保存到map容器\r\n      map.set(target, cloneTarget)\r\n      // 向对象添加属性\r\n      for (const key in target) {\r\n        if (target.hasOwnProperty(key)) {\r\n          // 对属性值进行递归处理\r\n          cloneTarget[key] = deepClone4(target[key], map)\r\n        }\r\n      }\r\n    }\r\n    return cloneTarget\r\n  }else {\r\n    return target\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/object/deepClone.js?");

/***/ }),

/***/ "./src/object/instanceof.js":
/*!**********************************!*\
  !*** ./src/object/instanceof.js ***!
  \**********************************/
/*! exports provided: myInstanceof */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myInstanceof\", function() { return myInstanceof; });\n// 自定义instanceof工具函数\r\n\r\nfunction myInstanceof(obj, type) {\r\n  // 得到一个原型对象\r\n  let protoObj = obj.__proto__\r\n  while (protoObj !== null) {\r\n    if (protoObj === type.prototype) {\r\n      return true\r\n    }\r\n    // 取出下一个原型对象并保存\r\n    protoObj = protoObj.__proto__\r\n  }\r\n  return false\r\n}\n\n//# sourceURL=webpack://aUtils/./src/object/instanceof.js?");

/***/ }),

/***/ "./src/object/mergeObject.js":
/*!***********************************!*\
  !*** ./src/object/mergeObject.js ***!
  \***********************************/
/*! exports provided: mergeObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeObject\", function() { return mergeObject; });\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/concat */ \"./src/array/concat.js\");\n\r\n\r\n// 合并多个对象\r\n\r\nfunction mergeObject(...objs) {\r\n  const result = {}\r\n  objs.forEach(obj => {\r\n    Object.keys(obj).forEach(key => {\r\n      const value = obj[key]\r\n      // result中没有key的属性\r\n      if (!result.hasOwnProperty(key)) {\r\n        result[key] = value\r\n      }else { // result中有key的属性\r\n        // 对原值和value进行合并生成新的数组\r\n        result[key] = Object(_array_concat__WEBPACK_IMPORTED_MODULE_0__[\"concat\"])([], result[key], value)\r\n      }\r\n    })\r\n  })\r\n  return result\r\n}\n\n//# sourceURL=webpack://aUtils/./src/object/mergeObject.js?");

/***/ }),

/***/ "./src/object/newInstance.js":
/*!***********************************!*\
  !*** ./src/object/newInstance.js ***!
  \***********************************/
/*! exports provided: newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newInstance\", function() { return newInstance; });\n// 自定义new工具函数\r\n\r\nfunction newInstance(Fn, ...args) {\r\n  // 创建一个空对象\r\n  const obj = {}\r\n  // 调用Fn函数，且指定this是新创建对象\r\n  const result = Fn.apply(obj, args)\r\n  // 如果Fn执行返回的是对象类型，最终的结果就是这个对象\r\n  if (result instanceof Object) {\r\n    return result\r\n  }\r\n  // 让原型对象是空的object对象，且constructor属性为Fn\r\n  /* obj.__proto__ = {}\r\n  obj.__proto__.constructor = Fn \r\n  创建的每个实列对象得到原型对象应该是同一个\r\n  */\r\n  obj.__proto__ = Fn.prototype\r\n  // 返回新建对象\r\n  return obj\r\n}\n\n//# sourceURL=webpack://aUtils/./src/object/newInstance.js?");

/***/ }),

/***/ "./src/string/index.js":
/*!*****************************!*\
  !*** ./src/string/index.js ***!
  \*****************************/
/*! exports provided: reverseString, palindrome, truncate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reverseString\", function() { return reverseString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"palindrome\", function() { return palindrome; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"truncate\", function() { return truncate; });\n// 字符串倒序: reverseString(str) 生成一个倒序的字符串\r\n// 字符串是否是回文: palindrome(str) 如果给定的字符串是回文就返回true，否则返回false\r\n// 截取字符串: truncate(str, num) 如果字符串的长度超过了num，截取前num长度，并以...结束\r\n\r\nfunction reverseString(str) {\r\n  return str.split('').reverse().join('')\r\n}\r\n\r\nfunction palindrome(str) {\r\n  return str === reverseString(str)\r\n}\r\n\r\nfunction truncate(str, num) {\r\n  return str.length > num ? str.substring(0, num) + '...' : str \r\n}\n\n//# sourceURL=webpack://aUtils/./src/string/index.js?");

/***/ })

/******/ });
});