import * as Phaser from 'phaser';
import { scenes } from './scenes';

export class Main {
    static gameref: Phaser.Game;

    public static initGame() {
        const config = {
            type: Phaser.AUTO,
            width: 480,
            height: 800,
            physics: { default: 'arcade' },
            backgroundColor: '#3498db',
            scene: scenes,
            banner: true,
            title: 'Phaser Typescript Test',
            url: 'http://example.com',
            version: '1.0.0'
        }

        this.gameref = new Phaser.Game(config);
    }
}

window.onload = () => {
    Main.initGame();
}
