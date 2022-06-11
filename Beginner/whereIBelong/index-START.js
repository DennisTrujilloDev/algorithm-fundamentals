/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/

const { TestScheduler } = require("jest")


function whereIBelong(arr, num) {
   arr.push(num)
   arr.sort((a,b)=> a-b)
   arr.indexOf(num)
}

// p: arr and num 
// arr => type array, constraints: how long/short can the array be? what data type are the elements?   
// num =?> number, integer or float? what is the min and max value of num? 
// r: create var to hold num, and return num 
// e: [5, 6, 7, 8] num = 1 => answer = 0  
// [7, "o" , 8, 9]  num = 7.8 => would num go before or after "o"?
// [10, 11, 12, 13] num = 15 => answer = 4
// what if num is equal to element in array?
// p:
// (if being compared to last or first element, then the operation might be different)
// * let answer = 0
//    * iterate over array (for looop b/c need access to iterator)
//    * compare to first, if smaller, grab index of element, assign answer to it, insert before elelment. if not smaller, move on to next element 
// *return answer 


module.exports = whereIBelong