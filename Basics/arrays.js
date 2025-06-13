// Array
// Array does shallow copy operations in javascript
// shallow copy means the copy if refering to the original . So changing the copy will change the original
// Array methods javascript
// .push adds an element to the end of the array
// .pop deletes the last element from the array

//.unshift() adds an element to the beginning of the array
//.shift() deletes the first element from the array
//.includes() returns boolean value depending on the value present or absent in the array
//.indexOf() returns the index of an element
//.join() creates a new string with the individual elements from the array
// by default join gives comma in between if not specified

// .slice(start, end) creates a new string with the mentioned starting and ending indexes
// .splice() creates a new array but edits the original array too
// note splice creates shallow copy
// .splice is more versatile it can add, remove and replace elements while slice() only extracts a portion of the array

//if we .push() another array to an array then the whole array will be considered as a single element

// ... triple dots called ellipsis is primarily used as spread syntax
// it breaks down the array into single elements
// example:
// const array_1 = [1,2,3,4]
// const array_2 = [...array_1 , 5 ,6]
// array_2 becomes [1,2,3,4,5,6]

//concat() returns a new string/array combining the two strings/arrays
//example
//const arr1 = [1,2,3]
//const arr2 = [4,5,6]
//const result = arr1.concat(arr2); // returns [1,2,3,4,5,6]


//.flat() methods removes the nested arrays into a single array//creats a new array
// the number of nested arrays to be simplified can be given as an argument
// if given .flat(infinity) then it will simplify all the nested elemnts to a single array


//Array.isArray() checks if the given argument is an array or not

//Array.from creates an array from the argument (iterable objects)

//Array.of if we want to combine different individual datatypes into a array
//Arrayfrom if we want to convert a iterable data type to an array
// if we are creating an array using arrayfrom from a object then make sure what we want to make the aray of
// the values or the keys


