// Add your doToElementsInArray() function here:

function doToElementsInArray(array, callback) {
  
}

// Add your changeCompletely() function here:




// 1) index.js doToElementsInArray() is defined:
//   ReferenceError: doToElementsInArray is not defined
//     at Context.it (test/index-test.js:18:14)

// 2) index.js doToElementsInArray() invokes the passed-in callback function on every element of the passed-in array using Array.prototype.forEach():
//   ReferenceError: doToElementsInArray is not defined
//     at Context.it (test/index-test.js:29:7)

// 3) index.js changeCompletely() is defined:
//   ReferenceError: changeCompletely is not defined
//     at Context.it (test/index-test.js:37:14)

// 4) index.js changeCompletely() alters every element in an array when used in conjunction with Array.prototype.forEach():
//   ReferenceError: changeCompletely is not defined
//     at Context.it (test/index-test.js:43:21)