/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
    const result = [];
    const n = nums.length;

    // Sort the array to facilitate finding quadruplets
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 3; i++) {
        // Skip duplicate values for the first number
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < n - 2; j++) {
            // Skip duplicate values for the second number
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    
                    // Skip duplicates for the third number
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    // Skip duplicates for the fourth number
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}

// Example usage:
const nums1 = [1, 0, -1, 0, -2, 2];
const target1 = 0;
console.log(fourSum(nums1, target1)); // Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

const nums2 = [2, 2, 2, 2, 2];
const target2 = 8;
console.log(fourSum(nums2, target2)); // Output: [[2,2,2,2]]
