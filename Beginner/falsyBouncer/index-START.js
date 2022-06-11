/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


function falsyBouncer(array) {
    let newArr = []
    array.forEach((ele)=>{
        if(ele){
            newArr.push(ele)
        }
    })
    
return newArr
}




module.exports = falsyBouncer