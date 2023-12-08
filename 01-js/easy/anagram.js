/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
// O(n) time | O(1) space
function isAnagram(str1, str2) {
  if(str1.length != str2.length)
    return false;
  const countArr = new Array(26).fill(0);
  for(let i = 0; i < str1.length; i++){
    countArr[(str1[i] >= 'a' ? str1.charCodeAt(i) - 32 : str1.charCodeAt(i)) - 65]++;
    countArr[(str2[i] >= 'a' ? str2.charCodeAt(i) - 32 : str2.charCodeAt(i)) - 65]--;
  }
  for(let i = 0; i < 26; i++)
    if(countArr[i] != 0) 
      return false;
  return true;
}

module.exports = isAnagram;
