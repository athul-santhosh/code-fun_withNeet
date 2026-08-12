class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    /*

        For all the cells that would make it to pacific , create an array for that , do the same for atlantic 

        Just loop through the matrix , and for the row,cell present in pacific and atlantic , just add to the result; 

            P
        X-------------x
        |             |
        |             |
     P  |             | A
        |             |
        |             |
        X-------------y
            A
    */
    pacificAtlantic(heights) {

        const ROW = heights.length;
        const COL = heights[0].length;

        const result = [];

        const pacific = Array.from({length:ROW},() => new Array(COL).fill(0));
        const atlantic = Array.from({length:ROW},() => new Array(COL).fill(0));


        function dfs(r,c,prevValue,ocean) {
            // out of bounds
            const outOfBounds = (r < 0 || c < 0 || r >= ROW || c >= COL || ocean[r][c] == 1 || prevValue > heights[r][c]);
            if (outOfBounds) return;

            if (prevValue <= heights[r][c]) {
                ocean[r][c] = 1;
            }

            // flow in 4 directions;
            dfs(r+1,c,heights[r][c],ocean);
            dfs(r-1,c,heights[r][c],ocean);
            dfs(r,c+1,heights[r][c],ocean);
            dfs(r,c-1,heights[r][c],ocean);

        }


        for (let r = 0; r < ROW; r++) {
            dfs(r,0,-1,pacific);
            dfs(r,COL-1,-1,atlantic);
        }

        for (let c= 0; c < COL; c++) {
            dfs(0,c,-1,pacific);
            dfs(ROW-1,c,-1,atlantic);
        }
        

        for (let r =0; r < ROW; r++) {
            for (let c = 0; c < COL; c++) {
                if (pacific[r][c] === 1 && atlantic[r][c] === 1) {
                    result.push([r,c]);
                }
            }
        }

        return result;
        
    }
}
