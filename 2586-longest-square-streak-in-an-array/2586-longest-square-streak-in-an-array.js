/**
 * @param {number[]} nums
 * @return {number}
 */
function longestSquareStreak(nums) {
    // Sort the array in ascending order to make the subsequence check easier
    nums.sort((a, b) => a - b);
    const set = new Set(nums);  // Convert to a set for faster lookup
    let maxLength = -1;

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let currentLength = 1;

        // Keep checking if the square of the current number exists in the set
        while (set.has(currentNum * currentNum)) {
            currentNum = currentNum * currentNum;
            currentLength++;
        }

        // Update the max length if a longer streak is found
        if (currentLength >= 2) {
            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
}

// Example usage:
console.log(longestSquareStreak([4, 3, 6, 16, 8, 2])); // Output: 3
console.log(longestSquareStreak([2, 3, 5, 6, 7]));     // Output: -1
