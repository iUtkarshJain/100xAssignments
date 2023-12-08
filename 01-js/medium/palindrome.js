/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
// O(n) time | O(1) space
function isPalindrome(str) {
  let [l, r] = [0, str.length - 1];
  while((str[l] < 'A' || (str[l] > 'Z' < str[l] < 'a') || str[l] > 'z') && (l < str.length))
      l++;
  while((str[r] < 'A' || (str[r] > 'Z' < str[r] < 'a') || str[r] > 'z') && (r >= 0))
    r--;
  while(l < r){
    const lCharCode = (str[l] >= 'A' && str[l] <= 'Z') ? str.charCodeAt(l) + 32 : str.charCodeAt(l);
    const rCharCode = (str[r] >= 'A' && str[r] <= 'Z') ? str.charCodeAt(r) + 32 : str.charCodeAt(r);
    if(lCharCode != rCharCode)
      return false;
    l++;
    while((str[l] < 'A' || (str[l] > 'Z' < str[l] < 'a') || str[l] > 'z') && (l < str.length))
      l++;
    r--;
    while((str[r] < 'A' || (str[r] > 'Z' < str[r] < 'a') || str[r] > 'z') && (r >= 0))
      r--;
  }
  return true;
}

module.exports = isPalindrome;
