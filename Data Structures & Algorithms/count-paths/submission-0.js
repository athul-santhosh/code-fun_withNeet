class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
    const matrix = Array.from({length: m},() => Array.from({length:n},() => 0));

    // fill the first row and column with 1

    for (let c = 0; c < n; c++) {
        matrix[0][c] = 1;
    }

    for (let r = 0; r < m; r++) {
        matrix[r][0] = 1;
    }

    for (let r =1; r < m; r++) {
        for (let c = 1; c < n; c++) {
            matrix[r][c] = matrix[r-1][c] + matrix[r][c-1];
        }
    }

    return matrix[m-1][n-1];
    }
}
