/*
serach()
  The search() method accepts a regular expression and returns the index of the first match in a string: let index = str.search(regexp);
  If the search() doesn’t find any match, it returns -1.

  Use the JavaScript String search() to find the index of the first match based on a regular expression in a string.

*/
let re = /[0-9]/;
let str = 'Hello, JavaScript!';
let index = str.search(re);
console.log(index);

let re1 = /[A-Z]/;
let str1 = 'hi There! How are you?';
let index2 = str1.search(re1);
console.log(index2);

/*
indexOf()
  JavaScript String indexOf() method to find the index of a substring within a string.
  The String.prototype.indexOf() returns the index of the first occurrence of substring (substr) in a string (str):
  let index = str.indexOf(substr, [, fromIndex]);
  It returns -1 if the str does not contain the substr. 
*/
//Using indexOf() method exampl
let str2 = 'finding substring in string';
let index3 = str2.indexOf('ing');
console.log('Using indexOf() method exampl ---- ' + index3); // 11

//Using indexOf() to count occurrences of a substring in a string
let str3 = 'You do not know what you do not know until you know.';
let substr = 'know';
let count = 0;

let index4 = str3.indexOf(substr);
while (index4 !== -1) {
  count++;
  index4 = str3.indexOf(substr, index4 + 1);
}
console.log(
  'Using indexOf() to count occurrences of a substring in a string----' + count
);
