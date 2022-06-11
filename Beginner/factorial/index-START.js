/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/


function factorial(n) {
let output = 1
for (i=1; i<=n; i++){
    output *= i
}
return output
}

// the provided integer(n)
// p n => integer
// constraints: is there a max and min value for n?
// retrn: returns the factorial of the provided integer
// create a var output 
// ex: 
// 3 => 6
// edge cases: -4 => 24 
// pseudo code 
// * create variable output
// * loop over integer n
//     asssign output to the product of all elements (1 - n)
// * return output

module.exports = factorial