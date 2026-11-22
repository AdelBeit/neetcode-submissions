class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = new Map();
        let cols = new Map();
        let squares = new Map();
        for(let r=0;r<board.length;r++){
            rows.set(r,new Set());
            for(let c=0;c<board[r].length;c++){
                let cell = board[r][c];
                if(!cols.has(c)) cols.set(c,new Set());
                if(cell == '.') continue;
                let squareKey = `${Math.floor(r/3)},${Math.floor(c/3)}`
                if(!squares.has(squareKey)) squares.set(squareKey,new Set());
                if(rows.get(r).has(cell) || cols.get(c).has(cell) || squares.get(squareKey).has(cell)) return false;
                rows.get(r).add(cell);
                cols.get(c).add(cell);
                squares.get(squareKey).add(cell);
            }
        }
        return true;
    }
}
