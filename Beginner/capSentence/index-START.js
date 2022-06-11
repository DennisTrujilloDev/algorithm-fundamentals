/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/
function capSentence(text) {
   let str = text[0].toUpperCase()
   for (let i=1; i<text.length; i++){
      if (text[i-1] === " "){
          str += text[i].toUpperCase()
      }else{
        str += text[i].toLowerCase()
      }
   }
   return str

}

// p: text => str
// constraints whats the min/max length of str?

// r: text w first lettter of every word capitalized 
// copy b/c str methods do not evr modify the original

// e:
// "hi there" => "Hi There"
// "" =>  ""
// "hiI tHEre" punctuation


// p
// * create var ""
// * loop over all of text  (for) 
// * check if first let of word => if its index 0 or if its got a space before i



module.exports = capSentence