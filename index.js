// Add your doToElementsInArray() function here:

function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

// Add your changeCompletely() function here:

function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}


// 3) index.js changeCompletely() is defined:
//   ReferenceError: changeCompletely is not defined
//     at Context.it (test/index-test.js:37:14)

// 4) index.js changeCompletely() alters every element in an array when used in conjunction with Array.prototype.forEach():
//   ReferenceError: changeCompletely is not defined
//     at Context.it (test/index-test.js:43:21)