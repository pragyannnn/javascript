// javascript has an older version too to specify that we are usign the new version we need to use the key words use string
// alert can be run on browser since there it is in a document and browser has a javascript engine
// we will get an error if we write it here since this is standalone javascript
// write code that is readable 
// There are different data types in javascript
// Some are string , number , bigint is used for large numbers symbol, boolean and objects
// Null is a standalone object type of null is object but type of undefined is undefined
// undefined is a datatype which occurs when we don't assign any value to our variables.

// datatype conversions

//we can convert to another datatype using the keywords , Number , String etc note first letter capital in the keyword\
//lets say we convert the string 123abc to numbers then the typeof function will say its a number but it is not a number it will give a output NaN i.e not at number
//for boolean conversions use Boolean . empty string and 0 is false and else everthing is true
/*
let p = "123abc"
console.log(typeof p)

let x = Number(p)
console.log(typeof x)
console.log(x)
*/
// console.log("2"+ 1 +1)      //if the first argument is a string then all the other will be treated as string so the output will be 211
// console.log(1+ 1+ "2")      // now the output will be 22
// (+true) will return 1
// (+false) will return 0  + is a way for type conversion
// post fix ++ increments the operand and returns the value before incrementing
// pre fis  ++ increments the operand and returns the value after  incrementing
// let p = 3
// let y = p++
// let x = ++p
// console.table([p,y,x])
//*************************************************************

//Two types of memory in javascript stack and heap
//All the primitive datatypes are stored in stacks while non primitive datatypes (objects, funcitons and arrays) are stored in heaps
//In stack a copy of the variable is created but in heap the original data is referred 
//So changing the value of the variable will change the original value in heap but not in stacks
//for example
/*
let stack_variable = "Stack_string"
let change_string= stack_variable
change_string = "Stack_string_changed"
console.log(stack_variable);
console.log(change_string);    # Both the value will not change since it is refering to a copy of the original value in stack

*/
/*
let myObj = {
    address : "nalbari",
    name: "Horkanto"

}

let Obj2 = myObj

Obj2.address = "gurdon"

console.log(Obj2)            
console.log(myObj)              #both the names will change since it is refering to the original value

*/
/* ********************************************************************************************************************************************************

Basic Manipulation
.trim()

Removes whitespace from both ends of a string.

input.trim()

.toLowerCase() / .toUpperCase()

Case normalization (e.g., for search or comparison).

email.toLowerCase() === userInput.toLowerCase()

.slice(start, end)

Extracts a part of the string (non-mutating).

str.slice(0, 5)

.substring(start, end)

Similar to .slice(), but no negative indexes.

.replace(searchValue, replaceValue)

Replaces part of a string.

str.replace('old', 'new')

Use regex with /g flag for multiple occurrences.

 Search & Match
.includes(substring)

Checks if a substring exists.

if (email.includes('@'))

.indexOf(substring) / .lastIndexOf()

Finds position of substring.

url.indexOf('https://') === 0

.startsWith(prefix) / .endsWith(suffix)

Common in URL, file name, or command parsing.

if (filename.endsWith('.jpg'))

.match(regex)

Finds all matches using regular expressions.

text.match(/\d+/g) → all numbers in string

.search(regex)

Returns the index of the first match (or -1).

if (text.search(/[a-z]/i) !== -1)

 Splitting & Joining
.split(separator)

Converts string to array.

'a,b,c'.split(',') → ['a', 'b', 'c']

.join(separator) (Array method, but relevant)

Opposite of split, often paired.

['a', 'b'].join('-') → 'a-b'

 Pattern & Encoding
.padStart(length, pad) / .padEnd(length, pad)

Padding strings, often used in formatting.

'5'.padStart(3, '0') → '005'

.repeat(n)

Repeats the string.

'-'.repeat(10) → '----------'

.charAt(index) / .charCodeAt(index)

Get character or Unicode code at a specific index.

'A'.charCodeAt(0) → 65

 Useful Cases in Production
User input normalization
→ trim(), toLowerCase(), replace()

Search & validation
→ includes(), match(), search()

Formatting output
→ padStart(), repeat(), slice()

Data parsing
→ split(), replace(), indexOf()

*/

