const solution = (board) => {
    let result = 0;
    for (let i = 0; i< board.length; i++) {
        for (let j=0; j<board[i].length; j++) {
            if (board[i][j] == 1) {
                if (i!==0 && board[i-1][j] !== 1) {
                    board[i-1][j] = 2;
                }
                if (i !== board.length-1 && board[i+1][j] !==1) {
                    board[i+1][j] = 2;
                }
                if (j !== 0 && board[i][j-1] !== 1 ) {
                    board[i][j-1] = 2;
                }
                if(j !== board[i].length-1 && board[i][j+1] !== 1) {
                    board[i][j+1] = 2
                }
                if(i !== 0 && j !== 0 && board[i-1][j-1] !== 1) {
                    board[i-1][j-1] = 2
                }
                if(i !== 0 && j !== board[i].length-1 && board[i-1][j+1] !== 1) {
                    board[i-1][j+1] = 2
                }
                if(i !== board.length-1 && j !== 0 && board[i+1][j-1] !== 1) {
                    board[i+1][j-1] = 2
                }
                if(i !== board.length-1 && j !== board[i].length-1 && board[i+1][j+1] !== 1) {
                    board[i+1][j+1] = 2
                }
            }
        }
    }
    board.forEach(a => a.forEach(b => b === 0 ? result ++ : null));
    return result
}