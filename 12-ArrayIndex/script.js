// // function createArray(nums, index) {
// //   let newArr = []
// //   for(let i = 0; i < nums.length; i++){
// //     newArr.splice(index[i], 0 , nums[i])
// //   }
// //   return newArr
// // }

// // //Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
// // let nums = [0,1,2,3,4]
// // let index = [0,1,2,2,1]
// // console.log(createArray(nums, index))//- Returns [0,4,1,3,2]

// function createArray(nums, index) {
// 	let length = nums.length;
//   let newArr = []
//   for(let i = 0; i< length; i ++ ){ // i = 0  // i = 1
//   	newArr[index[i]] = nums[i] //  nums[0] = 0 // num[1] = 
//     console.log(`I:${i} ||  Index:${index[i]} || Number:${nums[i]} -- ${newArr}`)
//   }
// 	return newArr
// }

// let nums =  [0,1,2,3,4]
// let index = [0,1,2,2,1]

// console.log(createArray(nums, index))



function groupAnagrams (arr) {
  const map = new Map()

  for (let word of arr) {
    const key = [...word].sort().join('')
    if (!map.has(key)) {
      map.set(key, word)
     // console.log(word + ' ' + [word])
    } else {
      let curr = map.get(key)
      map.set(key, [...curr, word])
    }
  }
  for(let val of map.values()){
    console.log(val)
  }
  return map.values()
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])) // Groups into ["ate","eat","tea"], ["nat","tan"], ["bat"]