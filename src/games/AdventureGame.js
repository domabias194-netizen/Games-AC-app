// AdventureGame.js

class AdventureGame {
    constructor() {
        this.playerName = '';
        this.inventory = [];
        this.currentLocation = 'start';
    }

    startGame(playerName) {
        this.playerName = playerName;
        console.log(`Welcome to the Adventure Game, ${this.playerName}!`);
        this.showLocation();
    }

    showLocation() {
        switch (this.currentLocation) {
            case 'start':
                console.log('You are at the starting point. Choose a path to continue.');
                break;
            case 'forest':
                console.log('You are in a dark forest. Sounds of creatures surrounds you.');
                break;
            case 'cave':
                console.log('You find yourself in a mysterious cave.');
                break;
            default:
                console.log('Location not recognized.');
        }
    }

    moveTo(location) {
        this.currentLocation = location;
        this.showLocation();
    }

    addItem(item) {
        this.inventory.push(item);
        console.log(`${item} has been added to your inventory.`);
    }
}

// Example usage:
// const game = new AdventureGame();
// game.startGame(' Hero');
// game.moveTo('forest');
// game.addItem('Sword');
