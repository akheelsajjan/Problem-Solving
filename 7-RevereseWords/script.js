// function reverseWords (str) {
//     return str.split(/\s+/).reverse().join(' ')
// }

// // " "   splits the array at one single space character.
// //   /\s/ splits the array at every kind of whitespace character

// console.log(reverseWords('Hello World')) //Returns 'World Hello'


// // reverse without using inbuilt functions
// function reverseWords2(str){
//     let reverseString = ''
//       str.split('').forEach(element => {
//         reverseString = element + reverseString; 
//     });
//     return reverseString
// }
// console.log(reverseWords2('Hello World'))

// // reverse without using inbuilt functions
// function reverseWords3(str){
//    return str.split('').reduce((prev, curr) => curr + prev, '')  
// }


console.log(reverseWords3('Hello World'))