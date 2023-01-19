const num1 = [1, 5, 7];
const num2 = [...num1, 2, 4, 3];
console.log('spread operator---' + num2);

function fn(a, b, ...args) {
  console.log('functional spread -- ' + args);
}
fn(4, 2, 5, 6, 8, 7, 0, 1, 3);

function compare(a, b) {
  return a - b;
}
let result = compare.apply(null, [1, 2]);
console.log('spread with apply--- ' + result);

let result1 = compare(...[6, 12]);
console.log('spread with compare--- ' + result1); // -1

let rivers = ['Nile', 'Ganges', 'Yangte'];
let moreRivers = ['Danube', 'Amazon'];

[].push.apply(rivers, moreRivers);

let shortform = rivers.push(...moreRivers);
console.log('array with push----' + rivers);
console.log('array with push only display number ---- ' + shortform);

let initialChars = ['A', 'B'];
let chars = [...initialChars, 'C', 'D'];
console.log('Constructing array literals -- ' + chars);

let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log('concatenating array -- ' + allNumbers);

let scores = [80, 70, 90];
let copiedScores = [...scores];
console.log('coping array -- ' + copiedScores);

let str = ['A', ...'BC', 'D'];
console.log('spread with string -- ' + str);
