/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let k = 1; // Start with the first unique element

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]; // Update the position for unique elements
            k++; // Increment the count of unique elements
        }
    }

    return k; // Return the number of unique elements
}

// Example usage:
const nums1 = [1, 1, 2];
const result1 = removeDuplicates(nums1);
console.log(result1); // Output: 2
console.log(nums1.slice(0, result1)); // Output: [1, 2]

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const result2 = removeDuplicates(nums2);
console.log(result2); // Output: 5
console.log(nums2.slice(0, result2)); // Output: [0, 1, 2, 3, 4]
