/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // Start from the last index of the array
    for (let i = digits.length - 1; i >= 0; i--) {
        
        // Increment the current digit by 1
        digits[i]++;
        
        // If the current digit is less than 10, no carry is needed, so return the array
        if (digits[i] < 10) {
            return digits;
        }
        
        // If the current digit becomes 10, set it to 0 and continue to the next iteration for carry
        digits[i] = 0;
    }
    
    // If we finished the loop and all digits were 9, we need to add a leading 1
    digits.unshift(1);
    return digits;
};