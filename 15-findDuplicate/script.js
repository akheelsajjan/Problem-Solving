function findDuplicate(arr) {
  let set = new Set();
  for(let i = 0; i< arr.length; i++){
    //check set has item
    //if present return else push
    if(set.has(arr[i])){
      return arr[i]
    }else{
      set.add(arr[i])
    }
  }
}

let arr = [1,4,6,8,2,8]

console.log(findDuplicate(arr)) /// returns 2