// // function isPalindrome (str) {
// //     let length = str.length
// //     let [...a] = [...str]
// //     let pallindrome = false
// //     console.log(a)
// //     for(let i=0; i< (length/2)  ; i ++){
// //         if(a[i] === a.pop()){
// //             pallindrome = true
// //         }else{
// //             pallindrome = false
// //         }
// //     }

// //     return pallindrome;

// // }

// // console.log(isPalindrome('ll'))

// function isPalindrome (str) {
//     // return (
//     //   str.toLowerCase() ===
//     //   str
//     //     .toLowerCase()
//     //     .split('')
//     //     .reverse()
//     //     .join('')
//     // )

//     return(
//         str.toLowerCase() ===
//         str
//         .toLowerCase()
//         .split('') // array
//         .reverse() //reverse array
//         .join('') // array to string
//     )
    
//   }


function isPalindrome(str){
    let strLength = str.length
    let [...arrStr] = [...str.toLowerCase()]
    let isPalindrome = false
    for(let i =0; i< (strLength/2); i++){
        if(arrStr[i] === arrStr.pop()){
            isPalindrome = true;
        }else{
            isPalindrome = false
        }
    }
    return isPalindrome;
}
//isPalindrome = (str) =>  str.toLowerCase() === str.toLowerCase().split('').reverse().join('')? true : false  
console.log(isPalindrome('aaAaaaaa'))