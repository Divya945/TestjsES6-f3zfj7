function sum(...arg) {
  let total = 0;
  for (const x of arg) {
    total += x;
  }
  return total;
}
let result = sum(5, 45, 10, 1);
console.log(result);

function sum2(...arg) {
  return arg
    .filter(function (e) {
      return typeof e === 'number';
    })
    .reduce(function (prev, curr) {
      return prev + curr;
    });
}
let res = sum2(20, 'hi', 10, undefined, null, 30);
console.log('JS rest result=== ' + res);
// In ES5
function sum3() {
  return Array.prototype.filter
    .call(arguments, function (e) {
      return typeof e === 'number';
    })
    .reduce(function (prev, curr) {
      return prev + curr;
    });
}
let res1 = sum3(20, 'hi', 60, 30);
console.log('JS rest result=== ' + res1);

// Rest with arrow function
const combine = (...args) => {
  return args.reduce(function (prev, curr) {
    return prev + ' ' + curr;
  });
};
let res3 = combine('JavaScript script', 'Rest', 'Parameters');
console.log('rest with arrow --- ' + res3);
// rest with dynamic function
//var res4 = new Function('...numbers', console.log(numbers));
//console.log('rest with dynamic function -- ' + res4);
