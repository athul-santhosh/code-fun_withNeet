class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {

    let islands = 0;


    
    function dfs(r,c) {
        // out of boundary 
        if (r < 0 || c < 0 || c >= grid[0].length || r >= grid.length || grid[r][c] == '0') {
            return;
        }


        grid[r][c] = '0';

        dfs(r-1,c);
        dfs(r+1,c);
        dfs(r,c-1);
        dfs(r,c+1);

    }

    for (let r =0 ; r < grid.length; r++ ){
        for (let c = 0 ; c < grid[0].length; c++) {
            if (grid[r][c] ==='1') {
                islands++;
                dfs(r,c);
            }
        }
    }

    return islands;
};
}
