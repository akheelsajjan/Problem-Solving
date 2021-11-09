// function groupAnagrams(arr) {
//     //sort each word
//     // if word is not present then -> (key, [word])
//     // if present - > (key, [...curr,word])
//     let map = new Map()
//     for(let word of arr){
//        const key =[...word].sort().join('')
//        if(!map.has(key)){
//            map.set(key , [word])
//        }else{
//            let curr = map.get(key)
//             map.set(key,[...curr,word])
//        }
//     }

//     return map.values()
// }

// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"]

// console.log(groupAnagrams(arr)) //Groups into ["ate","eat","tea"], ["nat","tan"], ["bat"]


function flattenArray(arr) {
	return	arr.reduce((acc, curr)=>{
  	if(Array.isArray(curr)){
    		acc = acc.concat(flattenArray(curr))
    }else{
    	  acc = acc.concat(curr)
    }
    return acc
  }, [])

}

let arr = [1, [2], [3, [[4]]]]

console.log(flattenArray(arr))