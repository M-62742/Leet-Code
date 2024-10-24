/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    let k = 0; // Counter for elements not equal to val

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Move the element to the front
            k++; // Increment the count of valid elements
        }
    }

    return k; // Return the count of elements not equal to val
}

// Example usage:
let nums1 = [3, 2, 2, 3];
let val1 = 3;
let k1 = removeElement(nums1, val1);
console.log(k1, nums1.slice(0, k1)); // Output: 2, [2, 2]

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
let k2 = removeElement(nums2, val2);
console.log(k2, nums2.slice(0, k2)); // Output: 5, [0, 1, 3, 0, 4]
