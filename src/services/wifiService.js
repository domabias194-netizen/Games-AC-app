'use strict';

class WifiService {
    constructor() {
        this.connectedDevices = [];
    }

    connect(device) {
        if (!this.connectedDevices.includes(device)) {
            this.connectedDevices.push(device);
            console.log(`${device} connected.`);
        } else {
            console.log(`${device} is already connected.`);
        }
    }

    disconnect(device) {
        const index = this.connectedDevices.indexOf(device);
        if (index !== -1) {
            this.connectedDevices.splice(index, 1);
            console.log(`${device} disconnected.`);
        } else {
            console.log(`${device} is not connected.`);
        }
    }

    synchronize() {
        console.log('Synchronizing devices: ', this.connectedDevices);
        // Synchronization logic here
    }
}

module.exports = WifiService;