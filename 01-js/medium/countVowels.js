/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function isVowel(c){
  return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U';
}
// O(n) time | O(1) space
function countVowels(str) {
    let res = 0;
    for(let i = 0; i < str.length; i++)
      if(isVowel(str[i]))
        res++;
    return res;
}

module.exports = countVowels;