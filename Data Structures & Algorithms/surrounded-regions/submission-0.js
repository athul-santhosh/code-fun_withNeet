class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */

    /*
     X. X. X
     X  X  X
     X  X. X
    */

    solve(board) {
    //     const row = board.length;
    //     const col = board[0].length;

    //     function dfs(r,c) {
    //        const outOfBounds = (r < 0 || c < 0 || r >= row || c >= col || board[r][c] == 'X');
    //        if (outOfBounds) return false;

    //        if (board[r][c] == 'O') {
    //         return true;
    //        }

    //        // four quadrants to check , if any of the fourQuadrants have full 'O', then change it to 'X'
    //        let topLeft = dfs(r-1,c-1);
    //        let top = dfs(r-1,c);
    //        let topRight = dfs(r-1,c+1)

    //        let left = dfs(r,c-1);
    //        let right = dfs(r,c+1);

    //        let bottomLeft = dfs(r+1,c-1);
    //        let bottom = dfs(r+1,c);
    //        let bottomRight = dfs(r+1,c+1);



    //     }


    //     for (let r= 0; r < row; r++) {
    //         for (let c = 0; c < col; c++){
    //             if (board[r][c] === 'O') {
    //                 dfs(r,c);
    //             }
    //         }    
    //     }    
            const row = board.length;
        const col = board[0].length;

        // DFS to mark border-connected 'O's as safe (temporarily 'T')
        function dfs(r, c) {
            if (r < 0 || c < 0 || r >= row || c >= col || board[r][c] !== 'O') return;

            board[r][c] = 'T'; // mark as safe (temporary)

            dfs(r - 1, c); // top
            dfs(r + 1, c); // bottom
            dfs(r, c - 1); // left
            dfs(r, c + 1); // right
        }

        // Step 1: Start DFS from all border 'O's
        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if ((r === 0 || r === row - 1 || c === 0 || c === col - 1) && board[r][c] === 'O') {
                    dfs(r, c);
                }
            }
        }

        // Step 2: Flip remaining 'O' → 'X' (surrounded), and 'T' → 'O' (restore safe)
        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (board[r][c] === 'O') board[r][c] = 'X';
                else if (board[r][c] === 'T') board[r][c] = 'O';
            }
        }
    }
}
