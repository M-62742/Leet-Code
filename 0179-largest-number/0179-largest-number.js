function largestNumber(nums) {
    // Convert numbers to strings for comparison
    const numsStr = nums.map(num => num.toString());
    
    // Sort the numbers based on the custom comparator
    numsStr.sort((a, b) => (b + a).localeCompare(a + b));
    
    // If the largest number is '0', the result should be '0'
    if (numsStr[0] === '0') {
        return '0';
    }
    
    // Join the sorted numbers to form the largest number
    return numsStr.join('');
}

// Example usage:
const nums1 = [10, 2];
console.log(largestNumber(nums1)); // Output: "210"

const nums2 = [3, 30, 34, 5, 9];
console.log(largestNumber(nums2)); // Output: "9534330"
