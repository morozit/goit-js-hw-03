const findBestEmployee = function (employees) {
  "use strict";
  // Write code under this line
  const maxWork = Math.max(...Object.values(employees));
  const keys = Object.keys(employees);
  let message = "";
  for (const key of keys) {
    if (maxWork === employees[key]) {
      message = key;
    }
  }
  return message;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

//  TODO VARIANT -2

// const findBestEmployee = function (employees) {
//   const entries = Object.entries(employees);
//   let biggestScore = 0;
//   let result = "";
//   for (const [name, score] of entries) {
//     if (score > biggestScore) {
//       biggestScore = score;
//       result = name;
//     }
//   }
//   return result;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));
// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// //console.log(findBestEmployee(supports));
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };
// console.log(findBestEmployee(sellers));
// // 'lux'
