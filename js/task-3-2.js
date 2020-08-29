const countProps = function (obj) {
  "use strict";
  // Write code under this line
  const keys = Object.keys(obj);
  let total = 0;
  for (let i = 0; i < keys.length; i += 1) {
    total += 1;
  }
  return total;
};

console.log(countProps({})); // 0

console.log(countProps({ a: 1, b: 1 })); // 2

console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5
