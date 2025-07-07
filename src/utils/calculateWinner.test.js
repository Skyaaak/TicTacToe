import calculateWinner from './calculateWinner';

describe('calculateWinner', () => {
    it('détecte une victoire en ligne horizontale', () => {
        const squares = ['X', 'X', 'X', null, null, null, null, null, null];
        const result = calculateWinner(squares);
        expect(result).toEqual({ winner: 'X', winningLine: [0, 1, 2], draw: false });
    });

    it('détecte une victoire en diagonale', () => {
        const squares = ['O', null, 'X', null, 'O', null, 'X', null, 'O'];
        const result = calculateWinner(squares);
        expect(result).toEqual({ winner: 'O', winningLine: [0, 4, 8], draw: false });
    });

    it('détecte une égalité (match nul)', () => {
        const squares = [
            'X', 'O', 'X',
            'X', 'O', 'O',
            'O', 'X', 'X',
        ];
        const result = calculateWinner(squares);
        expect(result).toEqual({ winner: null, winningLine: [], draw: true });
    });

    it("retourne null si la partie n'est pas finie et aucun gagnant", () => {
        const squares = [
            'X', 'O', null,
            null, 'O', null,
            null, null, 'X',
        ];
        const result = calculateWinner(squares);
        expect(result).toBeNull();
    });
});
