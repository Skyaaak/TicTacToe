import Square from './Square';
import calculateWinner from '../utils/calculateWinner';

// export default function Board({ xIsNext, squares, onPlay }) {
//     function handleClick(i) {
//         if (calculateWinner(squares) || squares[i]) {
//             return;
//         }
//         const nextSquares = squares.slice();
//         nextSquares[i] = xIsNext ? 'X' : 'O';
//         onPlay(nextSquares);
//     }
//
//     const winner = calculateWinner(squares);
//     const status = winner ? `${winner} a gagné` : `Prochain tour : ${xIsNext ? 'X' : 'O'}`;
//
//     return (
//         <>
//             <div className="status">{status}</div>
//             {[0, 1, 2].map((row) => (
//                 <div className="board-row" key={row}>
//                     {[0, 1, 2].map((col) => {
//                         const index = row * 3 + col;
//                         return (
//                             <Square
//                                 key={index}
//                                 value={squares[index]}
//                                 onSquareClick={() => handleClick(index)}
//                             />
//                         );
//                     })}
//                 </div>
//             ))}
//         </>
//     );
// }

export default function Board({ xIsNext, squares, onPlay }) {
    const result = calculateWinner(squares);
    const winningLine = result?.winningLine ?? [];

    function handleClick(i) {
        if (result && (result.winner || result.draw) || squares[i]) return;

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        onPlay(nextSquares);
    }

    let status;
    if (result) {
        if (result.winner) {
            status = result.winner + ' a gagné';
        } else if (result.draw) {
            status = 'Match nul !';
        }
    } else {
        status = 'Prochain tour : ' + (xIsNext ? 'X' : 'O');
    }

    const isDraw = result?.draw;

    function renderSquare(i) {
        const isWinningSquare = winningLine.includes(i);
        return (
            <Square
                key={i}
                value={squares[i]}
                onSquareClick={() => handleClick(i)}
                className={isWinningSquare ? 'winning-square' : ''}
            />
        );
    }

    return (
        <div className={isDraw ? 'draw-animation' : ''}>
            <div className="status">{status}</div>
            <div className="board-row">{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
            <div className="board-row">{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
            <div className="board-row">{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
        </div>
    );
}
