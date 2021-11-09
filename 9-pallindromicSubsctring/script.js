function countPalindromes (str, left, right) {
  let count = 0
  //Check for the palindrome
  while (
    left >= 0 &&
    right < str.length &&
    str.charAt(left) == str.charAt(right)
  ) {
    console.log( str.charAt(left) + " == " + str.charAt(right))
    console.log('---')
    count++ //Increment the count if palindromin substring found
    left-- //To trace string in left direction
    right++ //To trace string in right direction
  }
  return count
}
function countPalindromicSubstrings (s) {
  if (!s) return 0
  let count = 0
  for (let i = 0; i < s.length; i++) {
    count += countPalindromes(s, i, i) // Odd length
    count += countPalindromes(s, i, i + 1)  // Even length
  }
  return count
}

console.log(countPalindromicSubstrings('zza'))