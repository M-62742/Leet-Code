/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    let left = 0;               // Pointer at the beginning
    let right = height.length - 1; // Pointer at the end
    let maxArea = 0;

    while (left < right) {
        // Calculate the area using the current left and right lines
        let width = right - left;
        let currentHeight = Math.min(height[left], height[right]);
        let area = width * currentHeight;

        // Update maxArea if we found a larger one
        maxArea = Math.max(maxArea, area);

        // Move the pointer that points to the shorter line inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

// Example usage:
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));  // Output: 49
