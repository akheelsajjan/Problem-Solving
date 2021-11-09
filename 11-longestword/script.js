// function longestWord (str) {
//   let arrStr = str.split(' ');
//   return arrStr.reduce((acc,curr)=>{
//     return  (curr.length > acc.length)? acc = curr : acc
//   },'')
// }



function longestWord(str){
  let arrStg = str.split(' ')
  return arrStg.reduce(function(max, curr){
      return curr.length > max.length? max = curr: max
  },arrStg[0])
}
console.log(longestWord('aaaaaaaaaaaaaaaaaaaa dddddddddd aa'))