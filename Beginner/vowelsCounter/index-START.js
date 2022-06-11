/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    let counter = 0
    text = text.toLowerCase()
    for (let char of text){
        if ((char === "a") || (char === "e") || (char === "i") || (char === "o") || (char === "u")){
            counter ++
        } 
    }
    return counter
}

// p:
// Given a string of text, 
// text => str
// constraints: (max & min) => what is the min and max length of text? 

// r: 
// integer => # of vowels in text
// not returning original param but instead an int, so will probs need to declare a variable 


// e: 
// "aeipppppp" => 3 
// "plplplpl" => 0
// "" => 0
// edge cases: will text ever be empty? will text always be letters? will they always be lower or upper case?

// psuedo
// *create var for counter   
// *iterate over all elements in string 
//     *conditional, if element equals a vowel -- incr counter by one
// return counter  



module.exports = vowelsCounter;
