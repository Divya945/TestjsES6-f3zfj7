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
let str4 = 'JS indexOf';
let substr1 = 'js';
let index5 = str4.indexOf(substr1);
console.log(index5); // -1
let str5 = 'JS indexOf';
let substr2 = 'js';
let index6 = str5.toLocaleLowerCase().indexOf(substr2.toLocaleLowerCase());
console.log(index6); // 0

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
let str7 = 'JavaScript';
let index7 = str7.lastIndexOf('a');
console.log(index7);
let str8 = 'JavaScript';
let index8 = str8.lastIndexOf('a', 2);
console.log(index8);

//The lastIndexOf() and case-sensitivity
let str9 = 'Hello, World!';
let substr3 = 'L';
let index9 = str9.lastIndexOf(substr3);
console.log(index9); // -1
/*
includes()
  The includes() method determines whether a string contains another string:
  string.includes(searchString [,position])
The includes() method returns true if the searchString found in the string; otherwise false.
*/
//includes() examples
let email = 'admin@example.com';
console.log('true-----' + email.includes('@'));

let str0 = 'JavaScript String';
console.log('true---' + str0.includes('Script'));

let str11 = 'JavaScript String';
console.log('false include--- ' + str11.includes('Script', 5));

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

/*
endsWith()
  The endsWith() returns true if a string ends with the characters of a specified string or false otherwise.
  String.endsWith(searchString [,length])
  searchString is the characters to be searched for at the end of the string.
  length is an optional parameter that determines the length of the string to search. It defaults to the length of the string
  
*/
//String endsWith() method examples
const title1 = 'Jack and Jill Went Up the Hill';
console.log('String endsWith() method examples --' + title1.endsWith('Hill'));
console.log('String endsWith() method examples --' + title.endsWith('hill'));
console.log('String endsWith() ' + title1.endsWith('Up', 21));

/*
Trimming()

trim()
  trim() method to remove whitespace characters from both ends of a string.
  The String.prototype.trim()returns a new string stripped of whitespace characters from beginning and end of a string
  Note that the trim() method doesn’t change the original string.
  To remove whitespace characters from the beginning or from the end of a string only, you use the trimStart() or trimEnd() method.

trimStart()
  trimStart() method to remove whitespace from the beginning of a string.
  let newString = originalString.trimStart();
  The trimStart() method returns a new string from the original string with the leading whitespace characters removed. The trimStart() method doesn’t change the original string.
  The trimLeft() method is an alias of the trimStart() method.

trimEnd()
  To remove the whitespace characters from the end of a string, you use the trimEnd() method:
  let newString = originalString.trimEnd();
  The trimEnd() method returns a new string from an original string with the ending whitespace characters stripped. The trimEnd() method doesn’t change the original string.
The trimRight() method is an alias of the trimEnd() method
*/
//JavaScript trim() example
let strT = '  JS trim  ';
let result = strT.trim();
console.log('JavaScript trim() example-- ' + result);

const strtrimStart = '   JavaScript   ';
const resulttrimStart = strtrimStart.trimStart();
console.log({ strtrimStart });
console.log({ resulttrimStart });

const strtrimEnd = '   JavaScript   ';
const resulttrimEnd = strtrimEnd.trimEnd();

console.log({ strtrimEnd });
console.log({ resulttrimEnd });

/*
padStart()
  The padStart() method pads a string with another string to a certain length from the start of the string and returns a resulting string that reaches a certain length.
  String.prototype.padStart(padLength [,padString]);
The padStart() method takes two parameters:

The padLength is the length of the resulting string once it is padded. If the padLength is less than the string’s length, the string is returned as-is without padding.
The padString is an optional argument which is used to pad the string. The default value for this parameter is ‘ ‘. If the padString is greater than padLength, the padString will be truncated and only the left-most part will be padded.

padEnd()
  the padEnd() method pads a string to a certain length with another string. However, the padEnd() method pads from the end of the string.
  String.prototype.padEnd(padLength [,padString]);

*/

//padStart() examples
let strpadStart = '1234'.padStart(8, '0');
console.log('padStart-- ' + strpadStart); // "00001234"

let strpadStart1 = 'abc'.padStart(5);
console.log('padStart' + strpadStart1); // "  abc"
//padEnd() examples
let strpadEnd = 'abc'.padEnd(5);
console.log('padEnd ' + strpadEnd); // "abc  "

str = 'abc'.padEnd(5, '*');
console.log('padEnd ' + str); // "abc**"
str = 'abc'.padEnd(5, 'def');
console.log('padEnd ' + str); // "abcde"

/*
  split() method
split() method to split a string into an array of substrings.
split([separator, [,limit]]);

Use the JavaScript String split() to divide a string into an array of substrings by a separator.
Use the second parameter (limit) to return a limited number of splits.
*/
//JavaScript split() examples
let strsplit = 'JavaScript String split()';
let substrings = strsplit.split(' ');
console.log('strsplit-- ' + substrings);
//Returning a limited number of substrings
let strlimited = 'JavaScript String split()';
let limitedsubstrings = strlimited.split(' ', 2);
console.log('Returning a limited number of substrings ' + limitedsubstrings);

//Splitting a string using a regular expression example
let paragraphregular =
  'Good Morning! How are you? This is John. John is my friend.';
let sentences = paragraphregular.split(/[!,?,.]/);
console.log('regular expression' + sentences);

let paragraphregularexp =
  'Good Morning! How are you? This is John. John is my friend.';
let sentencesregularexp = paragraphregularexp.split(/([!,?,.])/);
console.log('regular expression' + sentencesregularexp);
