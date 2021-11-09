// find missing number // without using inbuilt methods // O(n) && 2nd highest number
let array = [4,5,1,3,8,9,10,2,6] 
let sum = 0
let max = -Infinity
let min = Infinity
let secondMax = array[0]

for(let i=0; i< array.length; i++){
    sum = sum + array[i]
    //array[i] > max ?  max = array[i]:max
    if(array[i] > max){
        secondMax = max
        max = array[i]
    }else if(max != array[i] && secondMax < array[i]){
        secondMax = array[i]
    }

    array[i] < min ? min = array[i]:min

}
let totalSum = (max *(max + 1) - min*(min -1)) /2
let missingNumber = totalSum - sum

console.log(`max: ${max}, min: ${min}, second Max: ${secondMax} , Missing Number: ${missingNumber}`)