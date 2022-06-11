/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



function isAnagram(stringA, stringB) {
    let answer = false
    for (let char of stringA){
        if(stringB.includes(char)){
            continue
        }else{
            return answer
        }
    }
    answer = true
    return answer
}


module.exports = isAnagram