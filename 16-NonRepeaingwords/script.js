function nonRepeatingWords(str1, str2) {
  let arr = str1.split(/\s+/)
  arr = arr.concat(str2.split(/\s+/))
  let map = new Map()
  arr.forEach(word => {
    // if(map.has(word)){
    //   map.set(word, map.get(word)+1)
    // }else{
    //   map.set(word, 1)
    // }
    map.has(word)?  map.set(word, map.get(word)+1): map.set(word, 1)
  });
  let res = [];
  for(let [key, value] of map){
    if(value === 1){
      res.push(key)
    }
  }

  return res;

}



let str1 = 'Hello world' 
let str2 = 'Hello Vishwas'
let str3 = 'Hello Hello' 
let str4 = 'Hello Hello'

console.log(nonRepeatingWords(str1, str2))
console.log(nonRepeatingWords(str3, str4))