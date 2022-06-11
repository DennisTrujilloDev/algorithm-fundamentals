/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) {
  let jointArray = []
  arrays.forEach(array => {
      jointArray = [...jointArray, ...array]
  });
  return [...new Set([...jointArray])]
}
// Given two or more arrays,
// param: arrays
// constraints: doesnt mention the length of the arrays
// retrn: combinestheir elements into one array without any repetition.
// example:[1,2, 3, 4] [2, 3, 4] => [1, 2, 3, 4]
// edge cases: [], [1, 2, 3] => [1,2,3]
// psuedo:
// * combine all arrays
// *

module.exports = mergeArrays;
