// StrategyGame.js

class StrategyGame {
    constructor() {
        this.players = [];
        this.gameState = 'waiting';
    }

    addPlayer(player) {
        this.players.push(player);
    }

    startGame() {
        if (this.players.length < 2) {
            throw new Error('Not enough players to start the game.');
        }
        this.gameState = 'in-progress';
    }

    endGame() {
        this.gameState = 'ended';
    }

    getGameState() {
        return this.gameState;
    }

    getPlayers() {
        return this.players;
    }
}

// Example usage:
// const game = new StrategyGame();
// game.addPlayer('Player 1');
// game.addPlayer('Player 2');
// game.startGame();
// console.log(game.getGameState()); // 'in-progress'