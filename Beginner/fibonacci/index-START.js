/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/


function fibonacci(n) {
    n = n + 1
    let arr = [0, 1]
    for (let i = 1; i <= n; i++){
        arr.push(arr[i] + arr[i -1])
    }
    return arr[n]
}


module.exports = fibonacci