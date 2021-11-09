
// function Union(arr1, arr2){
//   return  [].concat(arr1, arr2)
// }

// function Union(arr1, arr2){
//   return  arr1.concat(arr2)
// }

// function Union(arr1, arr2){
//   return  Array.prototype.push.apply(arr1, arr2) // not working
// }

function Union(arr1, arr2){
  return  [...arr1, ...arr2]
}

function intersection(arr1, arr2){
  return arr1.filter(item => arr2.includes(item))
}

function differnce(arr1, arr2){
  return arr1.filter(item => !arr2.includes(item))
}

function symetricDiffernce(arr1, arr2){
  return arr1.filter(item => !arr2.includes(item))
             .concat(arr2.filter(item => !arr1.includes(item)))
              
}


let arr1 = [1, 2, 3] 
let arr2 = [2, 3, 4]
console.log(Union(arr1, arr2))
console.log(intersection(arr1, arr2))
console.log(differnce(arr1, arr2))
console.log(differnce(arr2, arr1))
console.log(symetricDiffernce(arr2, arr1))