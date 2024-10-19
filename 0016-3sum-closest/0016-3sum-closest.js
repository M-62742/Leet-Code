/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
    // Sort the array to use two-pointer technique
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            // Update closestSum if the currentSum is closer to the target
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            // Move pointers based on comparison with target
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                // If currentSum equals target, return it immediately
                return currentSum;
            }
        }
    }

    return closestSum;
}

// Example usage:
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // Output: 2
console.log(threeSumClosest([0, 0, 0], 1)); // Output: 0
