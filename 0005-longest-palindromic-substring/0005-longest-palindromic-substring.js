/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
   let expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  };

  let longest = '';
  for (let i = 0; i < s.length; i++) {
    let palindrome1 = expandAroundCenter(i, i); // odd length palindrome
    let palindrome2 = expandAroundCenter(i, i + 1); // even length palindrome
    longest = [longest, palindrome1, palindrome2].sort((a, b) => b.length - a.length)[0];
  }
  return longest;
};