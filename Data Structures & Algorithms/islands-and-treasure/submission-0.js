class Solution {
    /**
     * @param {number[][]} grid
     */

    /*
  [2147483647,          -1,          0,              2147483647],
  [2147483647,      2147483647,     2147483647,             -1],
  [2147483647,          -1,         2147483647,             -1],
  [0,                    1,         2147483647,     2147483647]


  [3,                  -1,          0,                      1],
  [2,                   2,          1,                     -1],
  [1,                  -1,          2,                     -1],
  [0,                   1,         2147483647,     2147483647]

    */

    islandsAndTreasure(grid) {

        const numberOfRows = grid.length;
        const numberOfCols = grid[0].length;

        const cellsToProcess = [];
        const visitedCells = new Set();

        function addToQueueIfValid(row,col) {
            
            const cellIdentifier = row + ',' + col;

            const outOfBounds = (row >= numberOfRows || col >= numberOfCols || row < 0 || col <0); 
            if (outOfBounds) {
                return;
            }
            
            const alreadyVisited = visitedCells.has(cellIdentifier);
            const isWater = grid[row][col] === -1;

            if (alreadyVisited || isWater) {
                return;
            }

          
            visitedCells.add(cellIdentifier);

            cellsToProcess.push([row,col]);


        }



        // Find treasures 

        for (let currentRow = 0; currentRow < numberOfRows; currentRow++) {
            for (let currentCol = 0; currentCol < numberOfCols; currentCol++) {
                const currentGridValue = grid[currentRow][currentCol];
                if (currentGridValue === 0) {
                    const currentCellIdentifier = currentRow + ',' + currentCol;
                    cellsToProcess.push([currentRow,currentCol]);
                    visitedCells.add(currentCellIdentifier);
                }
            }
        }

        let currentDistanceFromTreasure = 0;
        // Multi Path BFS
        while (cellsToProcess.length > 0) {

            // There can be multiple cells at the current distance 
            const numberOfCellsAtCurrentDistance = cellsToProcess.length;

            // All these cells are gonna be at distance 1, (on first loop)
            for (let i=0; i < numberOfCellsAtCurrentDistance; i++) {
                const [currentRow,currentCol] = cellsToProcess.shift();
                grid[currentRow][currentCol] = currentDistanceFromTreasure;

                // Add cell to the queue if its valid;
                addToQueueIfValid(currentRow+1,currentCol);
                addToQueueIfValid(currentRow-1,currentCol);
                addToQueueIfValid(currentRow,currentCol+1);
                addToQueueIfValid(currentRow,currentCol-1);

            }
            currentDistanceFromTreasure++;
        }



    }
}
