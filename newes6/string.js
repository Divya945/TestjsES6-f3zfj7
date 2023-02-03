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
/* ES6
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

/*ES6
startsWith() 
  The startsWith() returns true if a string starts with a substring or false otherwise.
  String.startsWith(searchString [,position])

  searchString is the characters to be searched for at the start of this string.
  position is an optional parameter that determines the start position to search for the searchString. It defaults to 0.
  Use the String startsWith() method to check if a string starts with a substring.
*/
//startsWith() examples
const title = 'Jack and Jill Went Up the Hill';
console.log('startsWith() examples' + title.startsWith('Jack')); // true
console.log('startsWith() examples' + title.startsWith('jack')); // false
console.log('startsWith() examples' + title.startsWith('Jill', 9)); // true
let strstrartswith = 'Hello World';

console.log('startsWith() examples' + strstrartswith.startsWith('Hello')); // true
console.log('startsWith() examples' + strstrartswith.startsWith('World')); // false

/* ES6
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

subString()
JavaScript substring() method to extract a substring from a string.
str.substring(startIndex [, endIndex])
substring() method accepts two parameters: startIndexand endIndex:
The startIndex specifies the index of the first character to include in the returned substring.
The endIndex determines the first character to exclude from the returned substring. In other words, the returned substring doesn’t include the character at the endIndex.

 String slice() method
 JavaScript String slice() method to extract a substring from a string. 
 The slice() method returns a new array with a copied slice from the original array. The first optional argument is the beginning index and the second optional argument is the ending index (non-inclusive).
 slice(start, end)
  Doesn't modify the original array(immutable)
  Returns the subset of original array
  Used to pick the elements from array
 
 splice():
The splice() method changes the content of the array in place and can be used to add or remove items from the array. When only one argument is provided, all the items after the provided starting index are removed from the array.
Modifies the original array(mutable)
Returns the deleted elements as array
Used to insert or delete elements to/from array

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

// substring() examples
let strsubstring = 'JavaScript Substring';
let substring = strsubstring.substring(0, 10);
console.log('substring -- ' + substring);

//Extracting a substring to the end of the string example
let strExtracting = 'JavaScript Substring';
let substring1 = strExtracting.substring(11);
console.log('Extracting a substring --- ' + substring1);

//Extracting domain from the email example
let emaildomail = 'john.doe@gmail.com';
let domain = emaildomail.substring(emaildomail.indexOf('@') + 1);
console.log('Extracting domain  --- ' + domain); // gmail.com

//start
const strstart = 'Hello';
const substrstart = strstart.slice(3);
console.log({ substrstart });

//If the start is negative, the slice() method starts extraction from the str.length + start
const strnegative = 'Hello';
const substrnegative = strnegative.slice(-3);

console.log({ substrnegative });
//If the start is omitted, undefined, or cannot be converted to a number, the slice() method starts extraction from the beginning of the string:
const strundefined = 'Hello';
const substrundefined = strundefined.slice();
console.log({ substrundefined });
//slice()
//If the start is greater than or equal to the length of the string, the slice() method returns an empty string.
const strslice = 'Hello';
const substrslice = strslice.slice(5);

console.log({ substrslice });
//The end is a zero-based index that specifies the position before the slice() method ends the extraction. The result string will not include the character at the end index.
const strend = 'Hello';
const substrend = strend.slice(0, 2);
console.log({ substrend });
//If the end is negative, the slice() method treats it as str.length + end.
const strlegth = 'Hello';
const substrlength = strlegth.slice(0, -2);

// str.length 5
// str.length + end = 5 + (-2) = 3
console.log({ substrlength });
//If the end is greater than the length of the string, the slice() method extracts to the end of the string.
const strgratter = 'Hello';
const substrgratter = strgratter.slice(2, 6);
console.log({ substrgratter });
//If the end is omitted, undefined, or cannot be converted to a number, the slice() method also extracts to the end of the string.
const stromitted = 'Hello';
const substromitted = stromitted.slice(3);
console.log({ substromitted });

//JavaScript String slice() method practical example
let emaillocalPart = 'john@example.com';
let localPart = emaillocalPart.slice(0, email.indexOf('@'));
console.log('JavaScript String slice() method  ' + localPart);

//splice()
let numberssplice = [10, 20, 30];
numberssplice.splice(2, 1, 40, 50); // returns removed array:[30]
console.log(numberssplice); // Original array is mutated.
// returns: [10, 20, 40, 50]
/**
 * concat()
 JavaScript concat() method to concatenate strings.
 This method accepts a list of strings and returns a new string that contains the combined strings:
 string.concat(str1, [...strN]);

 Template Literals------->
 Here we will learn about JavaScript template literal, which allows you to work with a string template more easily.
 In ES6, you create a template literal by wrapping your text in backticks (`) 
 let simple = `This is a template literal`;

 A multiline string: a string that can span multiple lines.
 String formatting: the ability to substitute part of the string for the values of variables or expressions. This feature is also called string interpolation.
 HTML escaping: the ability to transform a string so that it is safe to include in HTML

 */
//Concatenating strings
let greeting = 'Hi';
let message = greeting.concat(' ', 'John');

console.log(message);
//Concatenating an array of strings
let colorsarray = ['Blue', ' ', 'Green', ' ', 'Teal'];
let resultarray = ''.concat(...colorsarray);

console.log(resultarray);
// Concatenating non-string arguments
let strnonstring = ''.concat(1, 2, 3);
console.log('strnonstring -- ' + strnonstring);

//JavaScript template literals
let strliterals = `Template literal in ES6`;

console.log('strliterals ---' + strliterals); // Template literal in ES6
console.log('strliterals ---' + strliterals.length); // 23
console.log('strliterals ---' + typeof strliterals); // string
//Variable and expression substitutions
let firstName = 'John',
  lastName = 'Doe';
let greetingexpression = `Hi ${firstName}, ${lastName}`;
console.log('expression ---- ' + greetingexpression); // Hi John, Doe

/*
String replace() method
String replace() method to replace a substring in a string with a new one.
let newStr = str.replace(substr, newSubstr);
The JavaScript String replace() method returns a new string with a substring (substr) replaced by a new one (newSubstr).replace() method doesn’t change the original string. It returns a new string.

string replaceAll() method
  replaceAll() method that replaces all occurrences of a substring with a new string.
  The String replace() method allows you to replace the first occurrence of a substring in a string with a new one.
  To replace all the occurrences of a substring with a new one, you can call the replace() method repeatedly or use a regular expression with a global flag (g).
  String.prototype.replaceAll(pattern, replacement)
*/
//String replace() examples
let strreplace = 'JS will, JS will rock you!';
let newStrreplace = strreplace.replace('JS', 'JavaScript');
console.log('replace --- ' + newStrreplace);

//Using regular expressions
let strregularexp = 'JS will, JS will rock you!';
let newStrregularexp = strregularexp.replace(/JS/g, 'JavaScript');
console.log('regular expression -- ' + newStrregularexp);

//Using a replacement function
let strreplacement = 'I like to eat, eat, eat apples and bananas';
let rereplacement = /apples|bananas/gi;

let newStr = strreplacement.replace(rereplacement, (match) => {
  console.log({ match });
  return match.toUpperCase();
});

console.log('str replacement --- ' + newStr);

//JavaScriptString replaceAll() example
let strreplaceall = 'JS will, JS will, JS will rock you.';
let newStrreplaceall = strreplaceall.replaceAll('JS', 'JavaScript');
console.log('newStrreplaceall -- ' + newStrreplaceall);

//JavaScript String replaceAll() with a callback function example
let strcallback = 'JS will, Js will, js will rock you.';
let pattern = /js/gi;

let newstrcallback = strcallback.replaceAll(
  pattern,
  function (match, offset, strcallback) {
    if (match === 'JS') return 'JavaScript';
    if (match === 'Js') return 'Javascript';
    if (match === 'js') return 'javascript';
    return '';
  }
);

console.log('str Callback ---  ' + newstrcallback);
/*
toUpperCase() 
  toUpperCase() method to return a string with all the characters converted to uppercase.
toLowerCase()
  toLowerCase() method to return a string with all the characters converted to lowercase.
*/
//uppercase
const messageuppercase = 'Hello';
const newMessage = messageuppercase.toUpperCase();
console.log('messageuppercase -------------' + newMessage);
//lowercase
const messagelowercase = 'Hi';
const newMessaglowercase = messagelowercase.toLowerCase();

console.log('newMessaglowercase ------- ' + newMessaglowercase);
//Getting the length of the string
let strlen = 'Good Morning!';
console.log('str length-- ' + strlen.length); // 13
//Accessing characters
let strchar = 'Hello';
console.log('str char=== ' + strchar[0]); // "H"
let strcharlen = 'Hello';
console.log('str char len ' + strcharlen[strcharlen.length - 1]); // "o"
let nameconc = 'John';
let strconc = 'Hello ' + nameconc;

console.log('string concat---' + strconc); // "Hello John"
let className = 'btn';
className += ' btn-primary';
className += ' none';

console.log('string concate ======== ' + className);

// converting values
let statusstr = false;
let strconv = statusstr.toString(); // "false"
let back = Boolean(strconv); // true
console.log('string converting ======== ' + strconv);
console.log('string converting ======== ' + back);

let resultcomp = 'a' < 'b';
console.log('str comparing ' + resultcomp); // true
let resultcomare = 'a' < 'B';
console.log('str comparing ' + resultcomare); // false

/*
How do you check whether a string contains a substring?
There are 3 fastest ways to check whether a string contains a substring or not,

1. Using RegEx:
The regular expression test() method checks if a match exists in a string. This method returns true if it finds a match, otherwise, it returns false.

2. Using indexOf:
The indexOf() method is case-sensitive and accepts two parameters. The first parameter is the substring to search for, and the second optional parameter is the index to start the search from (default index is 0).

3. Using includes:
The includes() is also case-sensitive and accepts an optional second parameter, an integer which indicates the position where to start searching for.
*/
let strregExp = 'JavaScript, Node.js, Express.js, React.js, MongoDB';
let exp1 = /MongoDB/g;
let exp2 = /Ajax/;
console.log(
  'check whether a string contains a substring - ' + exp1.test(strregExp)
); // true
console.log(
  'check whether a string contains a substring - ' + exp2.test('' + strregExp)
); // false

let strindexOfs = 'JavaScript, Node.js, Express.js, React.js, MongoDB';
console.log(
  'check whether a string contains a substring strindexOf - ' +
    strindexOfs.indexOf('MongoDB') !==
    -1
); // true
console.log(
  'check whether a string contains a substring - ' +
    strindexOfs.indexOf('PHP') !==
    -1
); // false
console.log(
  'check whether a string contains a substring - ' +
    strindexOfs.indexOf('Node', 5) !==
    -1
); // true

let strincludes = 'JavaScript, Node.js, Express.js, React.js, MongoDB';
console.log(
  'check whether a string contains a substring - ' +
    strincludes.includes('MongoDB')
); // true
console.log(
  'check whether a string contains a substring - ' + strincludes.includes('PHP')
); // false
console.log(
  'check whether a string contains a substring - ' +
    strincludes.includes('Node', 5)
); //true

/*What is eval function in javascript?

The eval() function evaluates JavaScript code represented as a string. The string can be a JavaScript expression, variable, statement, or sequence of statements.
If the argument of eval() is not a string, eval() returns the argument unchanged
*/
console.log(eval('10 + 20')); // 30

let x = 10;
let y = 20;
let z = '50';
console.log('eval function in javascript -- ' + eval('x + y + 1')); // returns 31
console.log('eval function in javascript -- ' + eval(z)); // returns 50
console.log(
  'eval function in javascript string  converting-- ' +
    eval(new String('10 + 20'))
); // returns a String object containing "10 + 20"
console.log('eval function in javascript -- ' + eval('10 + 20')); // returns 30
// work around
let expression = new String('10 + 20');
console.log('eval function in javascript -- ' + eval(expression.toString())); // returns 30
