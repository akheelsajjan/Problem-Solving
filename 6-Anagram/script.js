function sortString(str){
    return (str.
    toLowerCase()
    .split('')
    .sort()
    .join('')
    )
}


function isAnagram (str1, str2) {
   if(str1.length != str2.length){
        return false
   }else return (sortString(str1) === sortString(str2))
}

console.log(isAnagram('racecar', 'carrace'))