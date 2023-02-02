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

  The indexOf() returns the index of the first occurrence of a substring in a string, or -1 if the string does not contain the substring.
  The indexOf() is case-sensitive.  
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

// indexOf() and case-sensitivity
let str = 'JS indexOf';
let substr = 'js';
let index = str.indexOf(substr);
console.log(index); // -1
let str = 'JS indexOf';
let substr = 'js';
let index = str.toLocaleLowerCase().indexOf(substr.toLocaleLowerCase());
console.log(index); // 0

/*
lastIndexOf()
  lastIndexOf() method to locate the last occurrence of a substring in a string.
  The String.prototype.lastIndexOf() returns the last occurrence of a substring (substr) in a string (str). It returns -1 if the str does not contain the substr.
  str.lastIndexOf(substr, [, fromIndex]);
  The lastIndexOf() method searches for the substring backward from the fromIndex. The fromIndex is optional and defaults to +Infinity. It means that if you omit the fromIndex, the search starts from the end of the string.
  If the fromIndex is greater or equal to str.length, the lastIndexOf() will search for the substr in the whole string.
  If the fromIndex is less than zero, the search behavior is the same as if the fromIndex were zero.
  The lastIndexOf() always perform a case-sensitive search.
  To find the index of the first occurrence of a substring within a string, you use the lastindexOf() method.

  The lastIndexOf() returns the index of the last occurrence of a substring in a string, or -1 if the string does not contain the substring. It searches for the substring backward from the end of the string or from the fromIndex if this argument is available.
  The lastIndexOf() carries a case-sensitive search.
*/
//Using lastIndexOf() method
let str = 'JavaScript';
let index = str.lastIndexOf('a');
console.log(index);
let str = 'JavaScript';
let index = str.lastIndexOf('a', 2);
console.log(index);

//The lastIndexOf() and case-sensitivity
let str = 'Hello, World!';
let substr = 'L';
let index = str.lastIndexOf(substr);
console.log(index); // -1
/*
includes()
  The includes() method determines whether a string contains another string:
  string.includes(searchString [,position])
The includes() method returns true if the searchString found in the string; otherwise false.
*/
//includes() examples
let email = 'admin@example.com';
console.log(('true-----' +email.includes('@'));

let str = 'JavaScript String';
console.log('true---' + str.includes('Script'));

let str = 'JavaScript String';
console.log('false include--- ' + str.includes('Script', 5));

/*
startsWith() 
  The startsWith() returns true if a string starts with a substring or false otherwise.
  String.startsWith(searchString [,position])

  searchString is the characters to be searched for at the start of this string.
  position is an optional parameter that determines the start position to search for the searchString. It defaults to 0.
  Use the String startsWith() method to check if a string starts with a substring.
*/
//startsWith() examples
const title = 'Jack and Jill Went Up the Hill';
console.log(title.startsWith('Jack')); // true
console.log(title.startsWith('jack')); // false
console.log(title.startsWith('Jill', 9)); // true


