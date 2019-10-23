import * as Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
    coin: Phaser.GameObjects.Sprite;
    score: number;
    scoreText: Phaser.GameObjects.Text;

    constructor() {
        super({key: 'MainScene', active: true})
    }

    preload() {
        this.load.image('coin', 'assets/coin.png');
    }

    create() {
        this.coin = this.physics.add.sprite(Phaser.Math.Between(40, 440), 760, 'coin');
        this.score = 0;
        
        const style = {font: '20px Arial', fill: '#FFF'};
        this.scoreText = this.add.text(20, 20, 'SCORE: ' + this.score, style);
    }

    update() {

    }

}