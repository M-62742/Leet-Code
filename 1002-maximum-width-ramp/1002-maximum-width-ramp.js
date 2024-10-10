/**
 * @param {number[]} nums
 * @return {number}
 */
function maxWidthRamp(nums) {
    let stack = [];
    let maxWidth = 0;

    // Build a decreasing stack with indices
    for (let i = 0; i < nums.length; i++) {
        if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
            stack.push(i);
        }
    }

    // Iterate from the end of the array to find the maximum width ramp
    for (let j = nums.length - 1; j >= 0; j--) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[j]) {
            maxWidth = Math.max(maxWidth, j - stack.pop());
        }
    }

    return maxWidth;
}

// Example usage
let nums1 = [6, 0, 8, 2, 1, 5];
console.log(maxWidthRamp(nums1)); // Output: 4

let nums2 = [9, 8, 1, 0, 1, 9, 4, 0, 4, 1];
console.log(maxWidthRamp(nums2)); // Output: 7
