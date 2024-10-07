function largestLocal(grid) {
    const n = grid.length;
    const maxLocal = Array.from({ length: n - 2 }, () => Array(n - 2).fill(0));

    for (let i = 0; i < n - 2; i++) {
        for (let j = 0; j < n - 2; j++) {
            maxLocal[i][j] = Math.max(
                grid[i][j], grid[i][j + 1], grid[i][j + 2],
                grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2],
                grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2]
            );
        }
    }

    return maxLocal;
}

const grid1 = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]];
console.log(largestLocal(grid1)); 

const grid2 = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]];
console.log(largestLocal(grid2)); 
