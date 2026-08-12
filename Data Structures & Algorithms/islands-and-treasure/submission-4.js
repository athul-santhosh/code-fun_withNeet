class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let ROW = grid.length;
        let COL = grid[0].length;

        const queue = [];

        const visited = new Set();


        function addToGrid (r,c) {
            const outOfBounds = (r < 0) || c < 0 || r >= ROW || c >= COL;
            if (outOfBounds) {
                return;
            }

            const cellIdentifier = `${r}-${c}`;
            if (visited.has(cellIdentifier)) return;

            visited.add(cellIdentifier);

            // Wall check & other treasure
            if (grid[r][c] === -1 || grid[r][c] === 0) {
                return;
            }

            queue.push([r,c]);
        }

        for (let r = 0; r < ROW; r++) {
            for (let c=0; c < COL; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r,c]);
                }
            }
        }

        let dist = 0;

        while(queue.length > 0) {
            let currentSize = queue.length;

            // This is the guard for queue length; 

            for (let i = 0 ; i < currentSize; i++) {
                const [r,c] = queue.shift();
                grid[r][c] = dist;

                addToGrid(r+1,c);
                addToGrid(r-1,c);
                addToGrid(r,c+1);
                addToGrid(r,c-1);

            }

            dist++;
        }   
        
    }
}
