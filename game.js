class Game extends Phaser.Scene {
    constructor() {
        super('game');
    }

    preload() {
        this.load.image('player', 'assets/Player.png');

        this.load.image('oval', 'assets/Oval.png');

        this.load.image('skeleton', 'assets/Skeleton.png');

        this.load.image('fb1', 'assets/FightButton.png');
        this.load.image('fb2', 'assets/FightButtonHovered.png');
    }

    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;

        this.player = this.add.image(this.w * 0.2, this.h * 0.55, 'player').setDepth(2);
        
        this.oval1 = this.add.image(this.w * 0.19, this.h * 0.66, 'oval').setScale(1.3);
        this.oval2 = this.add.image(this.w * 0.82, this.h * 0.54, 'oval').setScale(1.3);

        this.monster = this.add.image(this.w * 0.8, this.h * 0.33, 'skeleton').setDepth(2);

        this.fbClicked = false;
        this.fb = this.add.image(this.w * 0.5, this.h * 0.9, 'fb1')
            .setScale(0.4)
            .setInteractive()
            .on('pointerover', () => {
                this.fb.setScale(0.45);
            })
            .on('pointerout', () => {
                this.fb.setScale(0.4);
            })
            .on('pointerdown', () => {
                if (!this.fbClicked) {
                    this.fbClicked = true;
                    this.fb.setTexture('fb2');
                    this.time.delayedCall(100, () => {
                        this.fbClicked = false;
                        this.fb.setTexture('fb1');
                    });
                }
            });
    }

    update() {

    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    physics: {
        default: 'arcade',
    },
    backgroundColor: 0x989898,
    scene: [Game],
    title: "Infinity Dungeon",
});