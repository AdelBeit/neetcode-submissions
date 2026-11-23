class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // check each row, and each col and each square. you can map over the r,c and then check if it exists in the set of rows,cols or square. at each cell add it to the appropriate cell set (rows,cols,squares) before moving on, so after seeing a cell once you can later check if you see it again
        let rows = new Map();
        let cols = new Map();
        let sqs = new Map();
        for(let r in board){
            for(let c in board[r]){
                let cell = board[r][c]
                if(cell === '.')continue;
                let sqKey = `${Math.floor(r/3)},${Math.floor(c/3)}`;
                if(rows.get(r)?.has(cell) || cols.get(c)?.has(cell) || sqs.get(sqKey)?.has(cell)) return false;
                rows.set(r, (rows.get(r) ?? new Set()).add(cell))
                cols.set(c, (cols.get(c) ?? new Set()).add(cell))
                sqs.set(sqKey, (sqs.get(sqKey) ?? new Set()).add(cell))
            }
        }
        return true;
    }
}
