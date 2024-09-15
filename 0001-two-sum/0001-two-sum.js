function twoSum(nums, target) {
    const numToIndex = new Map();  // Hash map to store number and its index
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;  // Find the complement of the current number
        if (numToIndex.has(complement)) {
            // If complement is found in hash map, return the indices
            return [numToIndex.get(complement), i];
        }
        // Store the index of the current number
        numToIndex.set(num, i);
    }
    return [];  // If no solution is found (though the problem guarantees one solution)
}
