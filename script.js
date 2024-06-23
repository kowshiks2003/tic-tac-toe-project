let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
];

const cells = document.querySelectorAll('.cell');
const messageText = document.getElementById('message');

function checkWinner() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a[0]][a[1]] && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
            return board[a[0]][a[1]];
        }
    }
    return null;
}

function checkDraw() {
    for (let row of board) {
        for (let cell of row) {
            if (cell === '') {
                return false;
            }
        }
    }
    return true;
}

function handleResult(result) {
    gameActive = false;
    if (result === 'Draw') {
        messageText.innerText = "It's a draw!";
    } else {
        messageText.innerText = `Player ${result} wins!`;
    }
}

function makeMove(row, col) {
    if (gameActive && board[row][col] === '') {
        board[row][col] = currentPlayer;
        cells[row * 3 + col].innerText = currentPlayer;
        
        const winner = checkWinner();
        if (winner) {
            handleResult(winner);
        } else if (checkDraw()) {
            handleResult('Draw');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            messageText.innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function resetGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    gameActive = true;
    messageText.innerText = `Player ${currentPlayer}'s turn`;
    cells.forEach(cell => cell.innerText = '');
}

