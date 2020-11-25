/* 
目录
1.两个数组求交集
*/


// 两个数组求交集
const arr1 = [
  { a: 1, b: 22 },
  { a: 3, b: 33 },
  { a: 4, b: 44 },
];
const arr2 = [
  { a: 1, b: 22 },
  { a: 2, b: 13 },
  { a: 4, b: 44 },
];
console.log(arr1.filter((_) => arr2.some((el) => el.a === _.a)));
