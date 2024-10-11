function twoSum(nums, target) {
    let map = new Map();  // To store the value and its index
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];  // Find the complement that adds up to the target
        
        if (map.has(complement)) {
            return [map.get(complement), i];  // If complement exists, return its index and current index
        }
        
        map.set(nums[i], i);  // Store the current number and its index in the map
    }
    
    return [];  // If no solution is found (this case won't happen due to problem constraints)
}
