/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    let copy = text
    let modified = text.split("").reverse().join("")
    return decide = modified === copy ? true : false
}


// p: Given a string of text
// text => a str of text 
// constraints: we don't know the min and max length of text 

// return true or false indicating whether or not the text is a palindrome.
// r: boolean value 

// e: "hello" => false
// "polop" => true 
// edge cases: empty strings, capitalization, spacing, punctuation?
// p:
// * create variable equal to string text 
// * split string into Array, reverse Array, join array into string
// * var equal to reversed srirng 
//     * if yes, return true 
//     * if Not, return false



module.exports = palindromeChecker;