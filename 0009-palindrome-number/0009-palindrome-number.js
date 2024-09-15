/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = (x) => {
  
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    
    const str = x.toString();
    let left = 0;
    let right = str.length - 1;
    
   
    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // Not a palindrome if characters don't match
        }
        left++;
        right--;
    }
    
    return true; // If all characters matched, it's a palindrome
};