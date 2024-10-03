function minSubarray(nums, p) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    const targetRemainder = totalSum % p;

    // If totalSum is already divisible by p, return 0
    if (targetRemainder === 0) {
        return 0;
    }

    const n = nums.length;
    let prefixSum = 0;
    const remainderIndexMap = new Map();
    remainderIndexMap.set(0, -1); // Handle case when we need the whole prefix sum

    let minLength = Infinity;

    for (let i = 0; i < n; i++) {
        prefixSum += nums[i];
        const currentRemainder = prefixSum % p;

        // Calculate the required remainder to achieve divisibility
        const requiredRemainder = (currentRemainder - targetRemainder + p) % p;

        // If we have seen this required remainder before
        if (remainderIndexMap.has(requiredRemainder)) {
            const length = i - remainderIndexMap.get(requiredRemainder);
            minLength = Math.min(minLength, length);
        }

        // Store the current prefix sum remainder index
        remainderIndexMap.set(currentRemainder, i);
    }

    // If minLength was updated, return it; otherwise, return -1
    return minLength === Infinity || minLength === n ? -1 : minLength;
}

// Example usage:
console.log(minSubarray([3, 1, 4, 2], 6)); // Output: 1
console.log(minSubarray([6, 3, 5, 2], 9)); // Output: 2
console.log(minSubarray([1, 2, 3], 3));     // Output: 0
console.log(minSubarray([1, 2, 3], 7));     // Output: -1
