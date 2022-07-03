// 5/27

// JavaScript's most important datatype is the object
// An object is a collection of name/ value pairs, or a string to value map 
let book = {     // Objects are enclosed in curly braces       
  topic:"JavaScript",  // The property "topic" has value "JavaScript"
  edition:7 // The property "edition" has value 7
}; // The curly brace marks the end of the object      
// Access the properties of an object with . or []
book.topic //=> "JavaScript"
book["edition"]
book.author = "Flanagan";
book.contets = {} // {} is an empty object with no properties

// Arrays 
let primes = [2, 3, 5, 7]; // An array of 4 values , delimited with [ , ]
primes[0] // => 2 :  the first element (index 0)

primes.length // => 4 : how many elements in the array
primes[primes.length-1] // => 7 : the last element of the array
// it equals 7 because you primes.length equals 4 and then 4 subtracts 1 and  all these  will equal  3
let empty = []; // empty Array
