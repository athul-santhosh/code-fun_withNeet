class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {

        if (grid.length === 0) return 0;

        let maxIsland = 0;

        const ROW = grid.length;
        const COL = grid[0].length;

        function dfs(r, c) {
            // out of bounds

            if (r < 0 || c < 0 || r >= ROW || c >= COL || grid[r][c] === 0) {
                return 0;
            }

            // set to 0

            grid[r][c] = 0;

            // move in 4 directins

            let top = dfs(r + 1, c); //top
            let down = dfs(r - 1, c); // down
            let left = dfs(r, c - 1); // left
            let right = dfs(r, c + 1); // right

            return 1 + top + left + down + right;
        }


        for (let r = 0; r < ROW; r++) {
            for (let c = 0; c < COL; c++) {
                if (grid[r][c] === 1) {
                    let currentIslandLength = dfs(r, c);
                    maxIsland = Math.max(currentIslandLength, maxIsland);
                }
            }
        }

        return maxIsland;
    };
}
