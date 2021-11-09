// You are given an array of two numbers [a,b]. Find the sum of those two numbers plus the sum of all the numbers between them.

// (Note: The lower number may not always be the first element in the array)


// function sum(arr) {
//     let sum = 0;
//     lastNum = Math.max(arr[0], arr.pop())
//     firstNum = Math.min(arr[0], arr.pop())

//     if(firstNum === lastNum){
//         return firstNum + lastNum
//     }else{
//         for(let i = firstNum; i<= lastNum; i++){
//             sum = sum + i
//         }
//         return sum
//     }

//  }

// function sum2(arr) {
//     let sum = 0;
//     lastNum = Math.max(arr[0], arr.pop())
//     firstNum = Math.min(arr[0], arr.pop())

//     if(firstNum === lastNum){
//         return firstNum + lastNum
//     }else{
//         return ( (lastNum * (lastNum + 1) - (firstNum - 1) * firstNum)/2 ) // mathematical formula
//     }

// }
// function sum(arr) {
//     lastNum = Math.max(arr[0], arr.pop())
//     firstNum = Math.min(arr[0], arr.pop())

//     console.log(lastNum + " " + firstNum)
// }


console.log(sum([3, 4]))
console.log(sum([9, 4])) //4,5,6,7,8,9
// console.log(sum2([4, 4]))
// console.log(sum2([1, 4])) //- Returns 10

