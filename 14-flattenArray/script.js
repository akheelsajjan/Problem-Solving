// function flattenArray(arr) {
//   let newArr = arr.reduce((acc , item)=>{
//     //if it is an array
//     //if it is a number
//     if(Array.isArray(item)){
//       acc = acc.concat(flattenArray(item)) 
//     }else{
//       //acc.push(item);
//       acc = [...acc,item]
//     }
//     return acc
//   },[])

//   return newArr
// }

// let arr = [1, [2], [3, [[4]]]]

// console.log(flattenArray(arr))  // Returns [1, 2, 3, 4]
