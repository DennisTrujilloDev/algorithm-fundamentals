/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


//Split, Reverse, Join are in reverse alphabetical order just like what we want to do to the string
function reverseString(text) {
    return text.split("").reverse().join("") 
}

// Given a string of text,
// p: str called text
// constraints = dont know how long or short str is 

// returns the text received in a reversed format
// r: the text reversed 

// e: "cat" => "tac"
// "ok" => "ko"
// edge cases: spacing, punctiation, empty string, null string


// p
// * turn string into array
// * reverse array 
// * join array back into str 



module.exports = reverseString