function findMedianSortedArrays(nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    
    let m = nums1.length;
    let n = nums2.length;
    let imin = 0;
    let imax = m;
    let halfLen = Math.floor((m + n + 1) / 2);
    
    while (imin <= imax) {
        let i = Math.floor((imin + imax) / 2);
        let j = halfLen - i;
        
        let nums1Left = (i === 0) ? -Infinity : nums1[i - 1];
        let nums1Right = (i === m) ? Infinity : nums1[i];
        let nums2Left = (j === 0) ? -Infinity : nums2[j - 1];
        let nums2Right = (j === n) ? Infinity : nums2[j];
        
        if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
            if ((m + n) % 2 === 1) {
                return Math.max(nums1Left, nums2Left);
            } else {
                return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2.0;
            }
        } else if (nums1Left > nums2Right) {
            imax = i - 1;
        } else {
            imin = i + 1;
        }
    }
    
    throw new Error("Input arrays are not sorted properly");
}

// Example usage:
console.log(findMedianSortedArrays([1, 3], [2]));  // Output: 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4]));  // Output: 2.5
