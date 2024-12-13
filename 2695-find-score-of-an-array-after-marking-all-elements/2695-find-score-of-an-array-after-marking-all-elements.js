var findScore = function(nums) {
    let n = nums.length;
    let score = 0;
    let marked = Array(n).fill(false);
    let minHeap = [];

    for (let i = 0; i < n; i++) {
        minHeap.push([nums[i], i]); // Push each element with its index
    }

    minHeap.sort((a, b) => a[0] - b[0]); // Sort heap by element value (min-heap)

    for (let i = 0; i < n; i++) {
        let [value, index] = minHeap[i];
        if (!marked[index]) {
            score += value;
            marked[index] = true;
            if (index > 0) marked[index - 1] = true;
            if (index < n - 1) marked[index + 1] = true;
        }
    }

    return score;
};
