/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumMountainRemovals(nums) {
    const n = nums.length;
    if (n < 3) return 0;
    
    const lis = new Array(n).fill(1);
    const lds = new Array(n).fill(1);
    
    // Calculate LIS (Longest Increasing Subsequence) from left to right
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                lis[i] = Math.max(lis[i], lis[j] + 1);
            }
        }
    }
    
    // Calculate LDS (Longest Decreasing Subsequence) from right to left
    for (let i = n - 2; i >= 0; i--) {
        for (let j = n - 1; j > i; j--) {
            if (nums[i] > nums[j]) {
                lds[i] = Math.max(lds[i], lds[j] + 1);
            }
        }
    }
    
    // Find the peak with valid LIS and LDS to form a mountain
    let maxMountainLength = 0;
    for (let i = 1; i < n - 1; i++) {
        if (lis[i] > 1 && lds[i] > 1) {
            maxMountainLength = Math.max(maxMountainLength, lis[i] + lds[i] - 1);
        }
    }
    
    // The minimum removals needed to make it a mountain array
    return n - maxMountainLength;
}

// Example usage:
console.log(minimumMountainRemovals([1, 3, 1])); // Output: 0
console.log(minimumMountainRemovals([2, 1, 1, 5, 6, 2, 3, 1])); // Output: 3
