export default function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                winner: squares[a],
                winningLine: [a, b, c],
                draw: false,
            };
        }
    }

    // Si toutes les cases sont remplies et aucun gagnant
    const isDraw = squares.every(square => square !== null);
    if (isDraw) {
        return {
            winner: null,
            winningLine: [],
            draw: true,
        };
    }

    return null;
}
